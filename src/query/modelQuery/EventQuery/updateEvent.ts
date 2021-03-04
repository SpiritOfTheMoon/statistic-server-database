import { Event } from "../../../models";

export async function updateEventName(
    id: string, updateName: string
): Promise<Event | null> {

    const options = {
        where: {
            id,
        },
    }
    try {

        await Event.update({
            name: updateName,
        }, options);

        return await Event.findOne(options);

    } catch (error) {

        console.error(error);
        throw error;

    }

}

export async function updateEventTargetID(
    id: string, updateTargetID: string
): Promise<Event | null> {

    const options = {
        where: {
            id,
        },
    }
    try {

        await Event.update({
            targetID: updateTargetID,
        }, options);

        return await Event.findOne(options);

    } catch (error) {

        console.error(error);
        throw error;

    }

}
