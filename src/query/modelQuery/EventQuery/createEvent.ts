import { Event, EventCreationAttributesType } from "../../../models";

export async function createEvent(

    value: EventCreationAttributesType,

): Promise<Event> {

    try {
        
        const event = await Event.create(value);
        return event;
    
    } catch (error) {

        console.error(error);
        throw error;
    
    }

}
