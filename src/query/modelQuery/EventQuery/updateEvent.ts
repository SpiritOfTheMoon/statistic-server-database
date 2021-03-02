import { Event } from "../../../models";

export async function updateEventName(
    id: string, updateName: string
): Promise<void> {
    
    try {

        await Event.update({
            name: updateName,
        }, {
            where: {
                id, 
            },
        });
        
    } catch (error) {

        console.error(error);
        throw error;
    
    }

}

export async function updateEventTargetID(
    id: string, updateTargetID: string
): Promise<void> {

    try {

        await Event.update({
            targetID: updateTargetID,
        }, {
            where: {
                id,
            },
        });

    } catch (error) {

        console.error(error);
        throw error;

    }

}
