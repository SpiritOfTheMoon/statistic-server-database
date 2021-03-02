import { Target, TargetCreationAttributesType } from "../../../models";

export async function createTarget(

    value: TargetCreationAttributesType,

): Promise<Target> {

    try {
        
        const target = await Target.create(value);
        return target;
    
    } catch (error) {

        console.error(error);
        throw error;
    
    }

}
