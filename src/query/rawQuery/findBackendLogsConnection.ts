import { BackendLogsAttributesTypeRowNumber } from "../../models";
import { Sequelize, OrderItem } from "sequelize/types";
import { limitParser } from "../../utils/parsers/limitParser";
import { offsetParser } from "../../utils/parsers/offsetParser";
import { arrayParser } from "../../utils/parsers/arrayParser";
import { QueryTypes } from "sequelize";

export function findBackendLogsConnection(sequelize: Sequelize): (
    systemId: string[],
    limit: number,
    offset: number,
    orderField: string,
    orderRowNumber: "ASC" | "DESC",
    order: "ASC" | "DESC",

) => Promise<BackendLogsAttributesTypeRowNumber[]> {


    const findBackendLogsConnectionFunc = (
        systemId: string[],
        limit: number,
        offset: number,
        orderField: string,
        orderRowNumber: "ASC" | "DESC",
        order: "ASC" | "DESC",

    ): Promise<BackendLogsAttributesTypeRowNumber[]> => {
        const systemIdOption = arrayParser(systemId, "[System].[Id]");

        const limitOption = limitParser(limit);
        const offsetOption = offsetParser(offset);
        const query = `
        SELECT L.*
    FROM [Statistic_UMK].[dbo].[System]
    cross apply (
        select *,
        ROW_NUMBER() OVER (order by ${orderField} ${orderRowNumber}) rowNumber
        from BackendLogs 
        where [BackendLogs].systemId = [System].[id]
        order by ${orderField} ${order}
        ${offsetOption} ${limitOption} 

    ) L
    where ${systemIdOption}
  `;
        const rows = sequelize.query<BackendLogsAttributesTypeRowNumber>(query, {
            raw: true,
            nest: true,
            type: QueryTypes.SELECT,
        });
        return rows;
    }
    return findBackendLogsConnectionFunc;


}