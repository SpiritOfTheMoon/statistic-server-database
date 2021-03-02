import { SystemTargetTargets, SystemTargetTargetsCreationAttributesType } from "../../../models";

export async function createSystemTargetTargets(

    value: SystemTargetTargetsCreationAttributesType,

): Promise<SystemTargetTargets> {

    try {
        
        const systemTargetTargets = await SystemTargetTargets.create(value);
        return systemTargetTargets;
    
    } catch (error) {

        console.error(error);
        throw error;
    
    }

}
