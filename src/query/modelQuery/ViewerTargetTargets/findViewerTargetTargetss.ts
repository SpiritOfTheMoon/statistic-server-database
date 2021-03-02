import { ViewerTargetTargets } from "../../../models";

export async function findViewerTargetTargetss(): Promise<ViewerTargetTargets[]> {

    return await ViewerTargetTargets.findAll();

}
