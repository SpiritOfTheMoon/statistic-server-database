import { Model } from "sequelize";

export type SystemTargetTargetsAttributesType = {

    id: string;
    systemID: string;
    targetID: string

};

export type SystemTargetTargetsCreationAttributesType = Omit<SystemTargetTargetsAttributesType, "id">;


export class SystemTargetTargets extends Model<
    SystemTargetTargetsAttributesType,
    SystemTargetTargetsCreationAttributesType> {

}
