import { Model } from "sequelize";
export type BackendLogsAttributesType = {

    id: string;
    query: string;
    date: Date;
    perfomance: number;
    login: string;
    resultType: string;
    systemId: string;
    args?: string | null;

};

export type BackendLogsAttributesTypeRowNumber = BackendLogsAttributesType & {
    rowNumber: number;
};

export type BackendLogsCreationAttibutesType = Omit<BackendLogsAttributesType, "id">;


export class BackendLogs extends Model<
    BackendLogsAttributesType,
    BackendLogsCreationAttibutesType> {

}

