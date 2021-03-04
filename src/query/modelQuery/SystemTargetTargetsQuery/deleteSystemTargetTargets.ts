import { SystemTargetTargets } from "../../../models";

export async function deleteSystemTargetTargets(
    id: string,
): Promise<SystemTargetTargets | null> {

    const option = {
        where: {
            id,
        },
    }

    const deletedSystemTargetTargets = await SystemTargetTargets.findOne(option);
    try {

        await SystemTargetTargets.destroy(option);
        return deletedSystemTargetTargets;

    } catch (error) {

        console.error(error);
        throw error;

    }
}
