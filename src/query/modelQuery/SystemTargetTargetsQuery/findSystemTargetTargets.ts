import { SystemTargetTargets } from "../../../models";

export async function findSystemTargetTargets(
    id: string,
): Promise<SystemTargetTargets | null> {

    return await SystemTargetTargets.findOne({
        where: {
            id,
        },
    });

}
