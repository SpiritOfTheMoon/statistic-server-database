import { Event } from "../../../models";

export async function deleteEvent(
    id: string,
): Promise<number | null> {

    return await Event.destroy({
        where: {
            id,
        },
    });

}
