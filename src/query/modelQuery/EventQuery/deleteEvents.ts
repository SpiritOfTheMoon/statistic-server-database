import { Event } from "../../../models";

export async function deleteEvents(): Promise<number | null> {

    return await Event.destroy();

}
