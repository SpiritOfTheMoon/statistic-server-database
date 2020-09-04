import { Sequelize } from "sequelize/types";
import { QueryTypes } from "sequelize";
import { BackendLogsAttributesTypeRowNumber } from "../../models";
import { limitParser } from "../../utils/parsers/limitParser";
import { offsetParser } from "../../utils/parsers/offsetParser";

export function findAllLogsByQuery(sequelize: Sequelize): (
    logId: string,
    limit: number,
    offset: number,
    orderField: string,
    orderRowNumber: "ASC" | "DESC",
    order: "ASC" | "DESC",

) => Promise<BackendLogsAttributesTypeRowNumber[]> {


    const findAllLogsByQueryFunc = async (
        logId: string,
        limit: number,
        offset: number,
        orderField: string,
        orderRowNumber: "ASC" | "DESC",
        order: "ASC" | "DESC",

    ): Promise<BackendLogsAttributesTypeRowNumber[]> => {
        const limitOption = limitParser(limit);
        const offsetOption = offsetParser(offset);
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


        SELECT *
        , ROW_NUMBER() OVER (order by ${orderField} ${orderRowNumber}) rowNumber
        FROM [dbo].[BackendLogs]
        where BackendLogs.query = [Log].[query]
        and BackendLogs.systemId = [Log].[systemId]
        order by ${orderField} ${order}
        ${offsetOption} ${limitOption} 
  `;
        
        const rows = await sequelize.query<BackendLogsAttributesTypeRowNumber>(sql, {
            raw: true,
            nest: true,
            type: QueryTypes.SELECT,
        });
        return rows;

    }
    return findAllLogsByQueryFunc;


}