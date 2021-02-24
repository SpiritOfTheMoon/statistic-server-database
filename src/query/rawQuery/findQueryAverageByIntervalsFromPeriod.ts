


import { Datepart } from "../../types/datepart";
import { Sequelize } from "sequelize/types";
import { QueryTypes } from "sequelize";
import { arrayParser } from "../../utils/parsers/arrayParser";
import { QueryAverageIntervalReportType } from "../../types/QueryAverageIntervalReportType";

export function findQueryAverageByIntervalsFromPeriod(
    sequelize: Sequelize,
): (
        keys: string[],
        from: Date,
        to: Date,
        interval: Datepart,
    ) => Promise<QueryAverageIntervalReportType[]> {
    const func: (
        keys: string[],
        from: Date,
        to: Date,
        interval: Datepart,
    ) => Promise<QueryAverageIntervalReportType[]> = (
        keys: string[],
        from: Date,
        to: Date,
        interval: Datepart,
        ) => {

            try {
                let systemArray = "[System].[id] is not null";
                if (keys.length !== 0) {

                    systemArray = arrayParser(keys, "[System].[id]")

                }
                const query = `
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
                        )
            
                        select [System].id
                        ,QueryInterval.*
                        from [System]
                        cross apply (
                            
                            select DatePart as fromDate
                            , nextDatePart as toDate
                            , Query.*
                            from [DateParts]
                            cross apply (
            
                                select AVG(perfomance) as averageQuery
                                , count (*) as countQuery
                                , query
                                from [BackendLogs]
                                where [BackendLogs].date <= [DateParts].nextDatePart
                                and [BackendLogs].date >= [DateParts].DatePart
                                and [BackendLogs].systemId = [System].id
                                group by [BackendLogs].query
            
                            ) Query
            
                        ) QueryInterval
            
            where ${systemArray}
            order by [QueryInterval].[averageQuery] DESC
            option(maxrecursion 0);
            
        `;
                const result = sequelize.query<QueryAverageIntervalReportType>(query, {
                    type: QueryTypes.SELECT,
                    nest: true,
                    raw: true,
                });
                return result;
            } catch (error) {
                console.error(error);
                throw error;
            }

        };
    return func;

}
