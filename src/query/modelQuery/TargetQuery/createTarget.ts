import { Target, TargetCreationAttributes } from "../../../models";

export async function createTarget(

    value: TargetCreationAttributes,

): Promise<Target> {

    try {

        return await Target.create(value);
    
    } catch (error) {

        console.error(error);
        throw error;
    
    }

}
