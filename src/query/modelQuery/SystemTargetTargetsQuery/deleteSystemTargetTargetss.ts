import { SystemTargetTargets } from "../../../models";

export async function deleteSystemTargetTargetss(): Promise<SystemTargetTargets[]> {

    const deletedSystemTargetTargets = await SystemTargetTargets.findAll();
    try {

        await SystemTargetTargets.destroy({
            where: {

            },
        });
        return deletedSystemTargetTargets;

    } catch (error) {

        console.error(error);
        throw error;

    }
}
