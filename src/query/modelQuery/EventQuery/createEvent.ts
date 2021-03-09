import { Event, EventCreationAttributes } from "../../../models";

export async function createEvent(

    value: EventCreationAttributes,

): Promise<Event> {

    try {
        return await Event.create(value);
    
    } catch (error) {

        console.error(error);
        throw error;
    
    }

}
