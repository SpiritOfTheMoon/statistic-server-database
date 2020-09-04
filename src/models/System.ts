import { Model } from "sequelize";

export type SystemAttributesType = {

    id: string;
    name: string;
    description?: string | null;

};

export type SystemCreationAttibutesType = Omit<SystemAttributesType, "id">;


export class System extends Model<
    SystemAttributesType,
    SystemCreationAttibutesType> {

}
