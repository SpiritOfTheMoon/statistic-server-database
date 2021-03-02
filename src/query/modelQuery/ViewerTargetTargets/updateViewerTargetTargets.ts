import { ViewerTargetTargets } from "../../../models";


export async function updateVTTTargetID(
    id: string, updateTargetID: string
): Promise<void> {

    try {

        await ViewerTargetTargets.update({
            targetID: updateTargetID,
        }, {
            where: {
                id,
            },
        });

    } catch (error) {

        console.error(error);
        throw error;

    }

}

export async function updateVTTViewerID(
    id: string, updateViewerID: string
): Promise<void> {

    try {

        await ViewerTargetTargets.update({
            viewerID: updateViewerID,
        }, {
            where: {
                id,
            },
        });

    } catch (error) {

        console.error(error);
        throw error;

    }

}
