import { Sequelize } from "sequelize";
import * as RawQueries from "../query/rawQuery";
import * as ModelQueries from "../query/modelQuery";

export type Key = keyof typeof RawQueries;
export type Value<T extends Key> = typeof RawQueries[T];
export type Func = { [C in Key]: ReturnType<Value<C>> };
export type API = {
    queries: Func & typeof ModelQueries;
    sequelize: Sequelize;
};

