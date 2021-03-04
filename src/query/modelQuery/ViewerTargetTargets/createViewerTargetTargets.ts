import {ViewerTargetTargets, ViewerTargetTargetsCreationAttributesType} from "../../../models";

export async function createViewerTargetTargets(

    value: ViewerTargetTargetsCreationAttributesType,

): Promise<ViewerTargetTargets> {

    try {

        return await ViewerTargetTargets.create(value);
    
    } catch (error) {

        console.error(error);
        throw error;
    
    }

}
