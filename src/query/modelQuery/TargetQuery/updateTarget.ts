import { Target } from "../../../models";

export async function updateTargetName(
    id: string, updateName: string
): Promise<Target | null> {

    const options = {
        where: {
            id,
        },
    }
    try {

        await Target.update({
            name: updateName,
        }, options);
        
        return await Target.findOne(options);
        
    } catch (error) {

        console.error(error);
        throw error;
    
    }

}
