import { Viewer } from "../../../models";

export async function updateViewer(
    id: string,
    identifier?: string,
    userInfo?: string,
    compInfo?: string,
): Promise<Viewer | null> {

    const options = {
        where: {
            id,
        },
    }
    try {

        await Viewer.update({
            identifier,
            userInfo,
            compInfo,
        }, options);

        return await Viewer.findOne(options);

    } catch (error) {

        console.error(error);
        throw error;

    }

}
