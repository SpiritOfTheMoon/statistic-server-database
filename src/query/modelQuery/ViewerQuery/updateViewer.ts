import { Viewer } from "../../../models";

export async function updateViewerIdentifier(
    id: string, updateIdentifier: string
): Promise<Viewer | null> {

    const options = {
        where: {
            id,
        },
    }
    try {

        await Viewer.update({
            identifier: updateIdentifier,
        }, options);

        return await Viewer.findOne(options);

    } catch (error) {

        console.error(error);
        throw error;

    }

}
