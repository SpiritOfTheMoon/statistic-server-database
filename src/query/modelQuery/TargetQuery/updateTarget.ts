import { Target } from "../../../models";

export async function updateTargetName(
    id: string, updateName: string
): Promise<void> {
    
    try {

        await Target.update({
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
