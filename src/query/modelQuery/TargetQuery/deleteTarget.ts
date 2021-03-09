import { Target } from "../../../models";

export async function deleteTarget(
    id: string,
): Promise<Target | null> {

    const option = {
        where: {
            id,
        },
    }
    
    const deletedTarget = await Target.findOne(option);
    try {

        await Target.destroy(option);
        return deletedTarget;
    
    } catch (error) {

        console.error(error);
        throw error;
    
    }

}
