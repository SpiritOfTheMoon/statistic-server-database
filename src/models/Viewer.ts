import { Model } from "sequelize";

export type ViewerAttributesType = {

    id: string;
    identifier : string;

};

export type ViewerCreationAttributesType = Omit<ViewerAttributesType, "id">;


export class Viewer extends Model<
    ViewerAttributesType,
    ViewerCreationAttributesType> {

}
