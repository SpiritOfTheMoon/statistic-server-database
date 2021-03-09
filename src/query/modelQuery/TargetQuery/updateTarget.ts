import { Target } from "../../../models";

export async function updateTarget(
    id: string,
    name?: string,
    systemID?: string,
): Promise<Target | null> {

    const options = {
        where: {
            id,
        },
    }
    try {

        await Target.update({
            name,
            systemID,
        }, options);
        
        return await Target.findOne(options);
        
    } catch (error) {

        console.error(error);
        throw error;
    
    }

}
