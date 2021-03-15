import { Sequelize } from "sequelize";
import * as RawQueries from "../query/rawQuery";
import * as ModelQueries from "../query/modelQuery";
import * as ClientQueries from "@umk-stat/statistic-server-client-database/src/query";

export type Key = keyof typeof RawQueries;
export type Value<T extends Key> = typeof RawQueries[T];
export type Func = { [C in Key]: ReturnType<Value<C>> };
export type API = {
    queries: Func & typeof ModelQueries & typeof ClientQueries;
    sequelize: Sequelize;
};

