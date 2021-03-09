import { Sequelize, Options } from "sequelize";
import * as InitTables from "./init-models";
import { API, Func, Key } from "./types/API";
import * as RawQueries from "./query/rawQuery";
import * as ModelQueries from "./query/modelQuery";

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
    };
    return queries;

}

export function initInstance(
    options: Options,
): API {

    const sequelize = new Sequelize(options);
    InitTables.initModels(sequelize)

    const queries = getQueries(sequelize);

    return {
        sequelize,
        queries,
    };

}
