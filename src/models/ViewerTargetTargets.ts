import { Model } from "sequelize";

export type ViewerTargetTargetsAttributesType = {

    id: string;
    viewerID  : string;
    targetID: string

};

export type ViewerTargetTargetsCreationAttributesType = Omit<ViewerTargetTargetsAttributesType, "id">;


export class ViewerTargetTargets extends Model<
    ViewerTargetTargetsAttributesType,
    ViewerTargetTargetsCreationAttributesType> {

}
