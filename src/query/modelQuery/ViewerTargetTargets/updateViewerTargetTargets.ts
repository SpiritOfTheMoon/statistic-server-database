import { ViewerTargetTargets } from "../../../models";


export async function updateVTTTargetID(
    id: string, updateTargetID: string
): Promise<ViewerTargetTargets | null> {

    const options = {
        where: {
            id,
        },
    }
    try {

        await ViewerTargetTargets.update({
            targetID: updateTargetID,
        }, options);

        return await ViewerTargetTargets.findOne(options);

    } catch (error) {

        console.error(error);
        throw error;

    }

}

export async function updateVTTViewerID(
    id: string, updateViewerID: string
): Promise<ViewerTargetTargets | null> {

    const options = {
        where: {
            id,
        },
    }
    try {

        await ViewerTargetTargets.update({
            viewerID: updateViewerID,
        }, options);

        return await ViewerTargetTargets.findOne(options);

    } catch (error) {

        console.error(error);
        throw error;

    }

}
