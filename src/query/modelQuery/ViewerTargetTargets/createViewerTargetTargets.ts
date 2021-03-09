import { ViewerTargetTargets, ViewerTargetTargetsCreationAttributes } from "../../../models";

export async function createViewerTargetTargets(

    value: ViewerTargetTargetsCreationAttributes,

): Promise<ViewerTargetTargets> {

    try {

        return await ViewerTargetTargets.create(value);
    
    } catch (error) {

        console.error(error);
        throw error;
    
    }

}
