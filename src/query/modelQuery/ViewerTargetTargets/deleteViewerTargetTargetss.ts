import { ViewerTargetTargets } from "../../../models";

export async function deleteViewerTargetTargetss(): Promise<ViewerTargetTargets[]> {

    const deletedViewerTargetTargets = await ViewerTargetTargets.findAll();
    try {

        await ViewerTargetTargets.destroy({
            where: {

            },
        });
        return deletedViewerTargetTargets;

    } catch (error) {

        console.error(error);
        throw error;

    }
}
