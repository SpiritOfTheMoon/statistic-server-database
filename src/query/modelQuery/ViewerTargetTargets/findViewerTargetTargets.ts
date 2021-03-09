import { ViewerTargetTargets } from "../../../models";

export async function findViewerTargetTargets(
    id: string,
): Promise<ViewerTargetTargets | null> {

    return await ViewerTargetTargets.findOne({
        where: {
            id,
        },
    });

}
