import { ResultTypeReportDbType } from "../../types/ResultTypeReportDbType";
import { Sequelize, QueryTypes } from "sequelize";
import { arrayParser } from "../../utils/parsers/arrayParser";

export function resultTypeReportDb(sequelize: Sequelize):
    (
        systemId: string[],
        fromDate: Date,
        toDate: Date,
    ) => Promise<ResultTypeReportDbType[]> {

    const resultTypeReportDbFunc = async (
        systemId: string[],
        fromDate: Date,
        toDate: Date,
    ): Promise<ResultTypeReportDbType[]> => {

        const systemIdOption = arrayParser(systemId, "[System].[id]");
        const query = `
		SELECT [id] as systemId
        , [L].resultType
        , [L].countResultType
                
        FROM [Statistic_UMK].[dbo].[System]
        cross apply (
            SELECT COUNT(*) as countResultType
            , resultType
            FROM [Statistic_UMK].[dbo].[BackendLogs]
            where [BackendLogs].date >=  '${fromDate.toISOString()}'
                and [BackendLogs].date <= '${toDate.toISOString()}'
                and [BackendLogs].systemId = [System].id
            group by resultType

        ) L
        where ${systemIdOption}
        `;
        const ans: ResultTypeReportDbType[] = await sequelize.query<ResultTypeReportDbType>(query, {
            type: QueryTypes.SELECT,
            nest: true,
            raw: true,

        });
        return ans;

    }
    return resultTypeReportDbFunc;



}

