import { Sequelize, Options } from "sequelize";
import * as InitTables from "./init";
import * as InitClientTables from "@umk-stat/statistic-server-client-database/src/init-models";
import { API, Func, Key } from "./types/API";
import * as RawQueries from "./query/rawQuery";
import * as ModelQueries from "./query/modelQuery";
import * as ClientQueries from "@umk-stat/statistic-server-client-database/src/query";

function getQueries(sequelize: Sequelize): API["queries"] {

    const result: Func = Object
        .keys(RawQueries)
        .reduce((prev, curr) => ({
            ...prev,
            [curr as Key]: RawQueries[curr](sequelize),
        }), {
        } as Func);
    const queries: API["queries"] = {
        ...result,
        ...ModelQueries,
        ...ClientQueries,
    };
    return queries;

}

export function initInstance(
    options: Options,
): API {
    
        const sequelize = new Sequelize(options);
        Object.keys(InitTables).map((key: keyof typeof InitTables) => {

            return InitTables[key](sequelize);

        });
        InitClientTables.initModels(sequelize);
        const queries = getQueries(sequelize);
        return {
            sequelize,
            queries,
        };

}
