import { Event } from "../../../models";

export async function findEvent(
    id: string,
): Promise<Event | null> {

    return await Event.findOne({
        where: {
            id,
        },
    });

}
