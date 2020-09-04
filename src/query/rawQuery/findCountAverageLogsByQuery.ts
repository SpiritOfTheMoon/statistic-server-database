import { Sequelize } from "sequelize/types";
import { QueryTypes } from "sequelize";
import { Statistic } from "../../types/Statistic";

export function findCountAverageLogsByQuery(sequelize: Sequelize): (
    logId: string,

) => Promise<Statistic> {


    const findCountAverageLogsByQueryFunc = async (
        logId: string,


    ): Promise<Statistic> => {

        const sql = `
        with [Log] as (
            SELECT [id]
                  ,[args]
                  ,[date]
                  ,[login]
                  ,[perfomance]
                  ,[query]
                  ,[result]
                  ,[resultType]
                  ,[systemId]
                  ,[createdAt]
                  ,[updatedAt]
                  ,[deletedAt]
              FROM [dbo].[BackendLogs]
              where id = '${logId}'
              )

        SELECT count(*) as count, avg(perfomance) as average
        FROM [dbo].[BackendLogs]
        where BackendLogs.query = [Log].query
        and BackendLogs.systemId = [Log].[SystemId]
  `;
        const rows = await sequelize.query<Statistic>(sql, {
            raw: true,
            nest: true,
            type: QueryTypes.SELECT,
        });
        return rows[0];

    }
    return findCountAverageLogsByQueryFunc;


}