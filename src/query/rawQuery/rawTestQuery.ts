import { Sequelize } from "sequelize";
import { QueryTypes } from "sequelize";

export function rawTestQuery (sequelize: Sequelize): () => Promise<number> {

    const query = ` Select 1 + 1 as num`;
    const as: () => Promise<number> = async () => {
        const num = await sequelize.query<{
            num: number,
        }>(query, {
            type: QueryTypes.SELECT,  
        });
        return num[0].num;

    };

    return as;

}
