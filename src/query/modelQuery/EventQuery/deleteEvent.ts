import { Event } from "../../../models";

export async function deleteEvent(
    id: string,
): Promise<Event | null> {

    const option = {
        where: {
            id,
        },
    }

    const deletedEvent = await Event.findOne(option);
    try {

        await Event.destroy(option);
        return deletedEvent;

    } catch (error) {

        console.error(error);
        throw error;

    }

}
