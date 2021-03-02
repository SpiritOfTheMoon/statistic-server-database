import { ViewerTargetTargets } from "../../../models";

export async function deleteViewerTargetTargetss(): Promise<number | null> {

    return await ViewerTargetTargets.destroy();

}
