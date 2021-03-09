import { Viewer } from "../../../models";

export async function deleteViewers(): Promise<Viewer[]> {

    const deletedViewers = await Viewer.findAll();
    try {

        await Viewer.destroy({
            where: {

            },
        });
        return deletedViewers;

    } catch (error) {

        console.error(error);
        throw error;

    }
}
