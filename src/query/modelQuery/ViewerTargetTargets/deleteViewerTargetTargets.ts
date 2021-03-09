import { ViewerTargetTargets } from "../../../models";

export async function deleteViewerTargetTargets(
    id: string,
): Promise<ViewerTargetTargets | null> {

    const option = {
        where: {
            id,
        },
    }

    const deletedViewerTargetTargets = await ViewerTargetTargets.findOne(option);
    try {

        await ViewerTargetTargets.destroy(option);
        return deletedViewerTargetTargets;

    } catch (error) {

        console.error(error);
        throw error;

    }
}
