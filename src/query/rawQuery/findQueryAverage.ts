import { Sequelize } from "sequelize";
import { QueryAverageReportType } from "../../types/QueryAverageReportType";
import { arrayParser } from "../../utils/parsers/arrayParser";
import { QueryTypes } from "sequelize";

export function findQueryAverage (
    sequelize: Sequelize,
): (
    keys: string[],
    fromDate: Date,
    toDate: Date,
) => Promise<QueryAverageReportType[]>  {

    const func: (
        keys: string[],
        fromDate: Date,
        toDate: Date,
    ) => Promise<QueryAverageReportType[]> = async (
        keys: string[],
        fromDate: Date,
        toDate: Date,
    ) => {
        let systemArray = "[System].[id] is not null";
        if (keys.length !== 0) {

            systemArray = arrayParser(keys, "[System].[id]")

        }
        const query = `
        select [System].[id] as [systemId]
        , L.query
        , L.countQuery
        , L.averageQueryPerfomance
        from [System]
        cross apply (
            SELECT query
            , count(*) as countQuery
            , AVG(perfomance) as averageQueryPerfomance
            FROM [dbo].[BackendLogs]
            where [System].[id] = [systemId]
            and [BackendLogs].date >=  '${fromDate.toISOString()}'
            and [BackendLogs].date <= '${toDate.toISOString()}'
            group by query
        ) L
        where ${systemArray}
        order by [L].[averageQueryPerfomance] DESC
        `;

        const result: QueryAverageReportType[] = await sequelize.query(query, {
            type: QueryTypes.SELECT,
            raw: true,
            nest: true,
        });
        return result;

    };

    return func;


}