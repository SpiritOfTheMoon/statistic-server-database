import { Viewer } from "../../../models";

export async function deleteViewer(
    id: string,
): Promise<number | null> {

    return await Viewer.destroy({
        where: {
            id,
        },
    });

}
