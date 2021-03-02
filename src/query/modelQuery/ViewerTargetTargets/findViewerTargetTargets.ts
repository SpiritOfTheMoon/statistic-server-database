import { ViewerTargetTargets } from "../../../models";

export async function findViewerTargetTargets(): Promise<ViewerTargetTargets[]> {

    return await ViewerTargetTargets.findAll();

}
