import { ViewerTargetTargets } from "../../../models";


export async function updateViewerTargetTargets(
    id: string,
    targetID?: string,
    viewerID?: string,
): Promise<ViewerTargetTargets | null> {

    const options = {
        where: {
            id,
        },
    }
    try {

        await ViewerTargetTargets.update({
            targetID,
            viewerID,
        }, options);

        return await ViewerTargetTargets.findOne(options);

    } catch (error) {

        console.error(error);
        throw error;

    }

}

