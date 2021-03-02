import { Model } from "sequelize";

export type TargetAttributesType = {

    id: string
    name: string;

};

export type TargetCreationAttributesType = Omit<TargetAttributesType, "id">;


export class Target extends Model<
    TargetAttributesType,
    TargetCreationAttributesType> {

}
