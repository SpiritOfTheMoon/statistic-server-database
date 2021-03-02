import { ViewerTargetTargets } from "../../../models";

export async function deleteViewerTargetTargets(
    id: string,
): Promise<number | null> {

    return await ViewerTargetTargets.destroy({
        where: {
            id,
        },
    });

}
