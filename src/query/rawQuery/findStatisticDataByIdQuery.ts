import { Sequelize } from "sequelize/types";
import { QueryTypes } from "sequelize";
import { FullStatitic as FullStatistic } from "../../types/FullStatistic";
import { arrayParser } from "../../utils/parsers/arrayParser";

export function findStatisticDataByIdQuery(sequelize: Sequelize): (
    logId: string[],
) => Promise<Array<FullStatistic & { id: string }>> {


    const findStatisticByQueryByIntervalFunc = async (
        logId: string[],
    ): Promise<Array<FullStatistic & { id: string }>> => {

        const idOption = arrayParser(logId, "[Init].id");
        const sql = `
        select [Init].id, Q.*
        from [BackendLogs] as [Init]
        cross apply (
            
            select count(*) as [count]
            , AVG([BackendLogs].perfomance) as [expectedValue]
            , MAX([BackendLogs].perfomance) as [maxValue]
            , STDEVP([BackendLogs].perfomance) as [deviation]
            FROM [dbo].[BackendLogs]
            where [BackendLogs].resultType = 'data'
            and [Init].query = BackendLogs.query

        ) Q
        where ${idOption};
  `;
        const rows = await sequelize.query<FullStatistic & { id: string }>(sql, {
            raw: true,
            nest: true,
            type: QueryTypes.SELECT,
        });
        return rows;

    }
    return findStatisticByQueryByIntervalFunc;


}