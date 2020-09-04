import { Sequelize } from "sequelize/types";
import { QueryTypes } from "sequelize";
import { Statistic } from "../../types/Statistic";
import { Period } from "../../types/Period";
import { Datepart } from "../../types/datepart";

export function findStatisticByQueryByInterval(sequelize: Sequelize): (
    logId: string,
    from: Date,
    to: Date,
    interval: Datepart,

) => Promise<Array<Statistic & Period>> {


    const findStatisticByQueryByIntervalFunc = async (
        logId: string,
        from: Date,
        to: Date,
        interval: Datepart,

    ): Promise<Array<Statistic & Period>> => {

        const sql = `
        declare @from datetime2 = '${from.toISOString()}';
        declare @to datetime2 = '${to.toISOString()}';
            
                        WITH Parts as (		
                            Select @from as [DatePart]
                            union all
                            select  
                                case 
                                    when DATEADD(${interval}, 1, [DatePart]) < @to then DATEADD(${interval}, 1, [DatePart])
                                    else @to
                                end
                            as 'DatePart'
                                from [Parts]
                                where [DatePart] < @to
                        ),
            
                        DateParts as (
            
                            select top(datediff(${interval}, @from, @to)) [Parts].[DatePart]
                            , LEAD( [Parts].[DatePart]) over (order by [DatePart] ASC) as nextDatePart
                            from [Parts]
                            where [Parts].[DatePart] <= @to
                            order by [DatePart] ASC
                        ),
                        
                        [Log] as (
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

                        select DatePart as fromDate
                        , nextDatePart as toDate
                        , Query.*
                        from [DateParts]
                        cross apply (
                            SELECT count(*) as count, avg(perfomance) as average
                            FROM [dbo].[BackendLogs] as B
                            where B.query = [Log].query
                            and B.systemId = [Log].[systemId]
                            and date < nextDatePart and date > DatePart
                        ) Query
                        option(maxrecursion 0);
  `;
        const rows = await sequelize.query<Statistic & Period>(sql, {
            raw: true,
            nest: true,
            type: QueryTypes.SELECT,
        });
        return rows;

    }
    return findStatisticByQueryByIntervalFunc;


}