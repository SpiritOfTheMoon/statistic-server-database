import { Sequelize } from "sequelize/types";
import { arrayParser } from "../../utils/parsers/arrayParser";
import { QueryTypes } from "sequelize";

export function countBackendLogs(sequelize: Sequelize): (
    systemId: string[],

) => Promise<number[]> {


    const countBackendLogsFunc = async (
        systemId: string[],

    ): Promise<number[]> => {
        const systemIdOption = arrayParser(systemId, "[System].[Id]");

        const query = `
        SELECT 
        [dbo].[System].[id] as [id]
        , L.*
        FROM [dbo].[System]
        cross apply (
            select count(*) as countBackendLogs
            from BackendLogs 
            where [BackendLogs].systemId = [System].[id]
        ) L
        where ${systemIdOption}
  `;
        const rows = await sequelize.query<{
            id: string,
            countBackendLogs: number,
        }>(query, {
            raw: true,
            nest: true,
            type: QueryTypes.SELECT,
        });
        const countMap = rows.reduce((prev, val) => {
            prev.set(val.id, val.countBackendLogs);
            return prev;
        }, new Map<string, number>());
        return systemId.map((val) => {

            const q = countMap.get(val);
            return q ?? 0;

        });
    }
    return countBackendLogsFunc;


}