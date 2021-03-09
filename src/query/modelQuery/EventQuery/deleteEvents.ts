import { Event } from "../../../models";

export async function deleteEvents(): Promise<Event[]> {

    const deletedEvents = await Event.findAll();
    try {

        await Event.destroy({
            where: {

            },
        });
        return deletedEvents;

    } catch (error) {

        console.error(error);
        throw error;

    }
}
