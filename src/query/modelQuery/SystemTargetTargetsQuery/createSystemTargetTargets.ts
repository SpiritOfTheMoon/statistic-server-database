import {SystemTargetTargets, SystemTargetTargetsCreationAttributesType} from "../../../models";

export async function createSystemTargetTargets(

    value: SystemTargetTargetsCreationAttributesType,

): Promise<SystemTargetTargets> {

    try {

        return await SystemTargetTargets.create(value);
    
    } catch (error) {

        console.error(error);
        throw error;
    
    }

}
