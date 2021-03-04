import { SystemTargetTargets } from "../../../models";


export async function updateSTTTargetID(
    id: string, updateTargetID: string
): Promise<SystemTargetTargets | null> {

    const options = {
        where: {
            id,
        },
    }
    try {

        await SystemTargetTargets.update({
            targetID: updateTargetID,
        }, options);

        return await SystemTargetTargets.findOne(options);

    } catch (error) {

        console.error(error);
        throw error;

    }

}

export async function updateSTTSystemID(
    id: string, updateSystemID: string
): Promise<SystemTargetTargets | null> {

    const options = {
        where: {
            id,
        },
    }
    try {

        await SystemTargetTargets.update({
            systemID: updateSystemID,
        }, options);

        return await SystemTargetTargets.findOne(options);

    } catch (error) {

        console.error(error);
        throw error;

    }
}
