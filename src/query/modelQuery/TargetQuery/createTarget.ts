import {Target, TargetCreationAttributesType} from "../../../models";

export async function createTarget(

    value: TargetCreationAttributesType,

): Promise<Target> {

    try {

        return await Target.create(value);
    
    } catch (error) {

        console.error(error);
        throw error;
    
    }

}
