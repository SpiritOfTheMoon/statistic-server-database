import { Viewer } from "../../../models";

export async function deleteViewer(
    id: string,
): Promise<Viewer | null> {

    const option = {
        where: {
            id,
        },
    }

    const deletedViewer = await Viewer.findOne(option);
    try {

        await Viewer.destroy(option);
        return deletedViewer;

    } catch (error) {

        console.error(error);
        throw error;

    }

}
