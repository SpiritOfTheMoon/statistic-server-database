import { Event } from "../../../models";

export async function findEvents(): Promise<Event[]> {

    return await Event.findAll();

}
