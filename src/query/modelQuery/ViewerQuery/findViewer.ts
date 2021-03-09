import { Viewer } from "../../../models";

export async function findViewer(
    id: string,
): Promise<Viewer | null> {

    return await Viewer.findOne({
        where: {
            id,
        },
    });

}
