import { Event } from "../../../models";

export async function updateEvent(
    id: string,
    name?: string,
    targetID?: string,
    viewerID?: string,
    time?: Date
): Promise<Event | null> {

    const options = {
        where: {
            id,
        },
    }
    try {

        await Event.update({
            name,
            targetID,
            viewerID,
            time,
        }, options);

        return await Event.findOne(options);

    } catch (error) {

        console.error(error);
        throw error;

    }

}


