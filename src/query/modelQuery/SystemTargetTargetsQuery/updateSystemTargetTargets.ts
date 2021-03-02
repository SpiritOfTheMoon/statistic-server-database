import { SystemTargetTargets } from "../../../models";


export async function updateSTTTargetID(
    id: string, updateTargetID: string
): Promise<void> {

    try {

        await SystemTargetTargets.update({
            targetID: updateTargetID,
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

export async function updateSTTSystemID(
    id: string, updateSystemID: string
): Promise<void> {

    try {

        await SystemTargetTargets.update({
            systemID: updateSystemID,
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
