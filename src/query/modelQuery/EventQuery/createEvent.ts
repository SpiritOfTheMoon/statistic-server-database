import {Event, EventCreationAttributesType} from "../../../models";

export async function createEvent(

    value: EventCreationAttributesType,

): Promise<Event> {

    try {

        return await Event.create(value);
    
    } catch (error) {

        console.error(error);
        throw error;
    
    }

}
