import { ViewerTargetTargets, ViewerTargetTargetsCreationAttributesType } from "../../../models";

export async function createViewerTargetTargets(

    value: ViewerTargetTargetsCreationAttributesType,

): Promise<ViewerTargetTargets> {

    try {
        
        const viewerTargetTargets = await ViewerTargetTargets.create(value);
        return viewerTargetTargets;
    
    } catch (error) {

        console.error(error);
        throw error;
    
    }

}
