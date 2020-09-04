import { Datepart } from "../../types/datepart";
import { Sequelize } from "sequelize/types";
import { ResultTypeInervalReportDbType } from "../../types/ResultTypeInervalReportDbType";
import { QueryTypes } from "sequelize";
import { arrayParser } from "../../utils/parsers/arrayParser";

export function findResultTypeByIntervalsFromPeriod(
    sequelize: Sequelize,
): (
        keys: string[],
        from: Date,
        to: Date,
        interval: Datepart,
    ) => Promise<ResultTypeInervalReportDbType[]> {
    const func: (
        keys: string[],
        from: Date,
        to: Date,
        interval: Datepart,
    ) => Promise<ResultTypeInervalReportDbType[]> = (
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
            ,ResultTypeInterval.*
            from [System]
            cross apply (

                select [DateParts].[DatePart] as [onDate]
                , ResultType.countResultType
                , ResultType.resultType
                from [DateParts]
                cross apply (
                
                        SELECT COUNT(*) as countResultType
                        , resultType
                        FROM [dbo].[BackendLogs]
                        where [systemId] = [System].id
                            and [BackendLogs].date >=  [DateParts].[DatePart]
                            and [BackendLogs].date <=  [DateParts].[nextDatePart]

                        group by resultType

                ) ResultType
                where [DateParts].[DatePart] < @to

            ) ResultTypeInterval
            where ${systemArray}
            option(maxrecursion 0);
            
        `;
            const result = sequelize.query<ResultTypeInervalReportDbType>(query, {
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
