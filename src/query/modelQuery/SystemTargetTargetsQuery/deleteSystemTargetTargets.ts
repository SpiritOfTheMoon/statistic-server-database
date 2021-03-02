import { SystemTargetTargets } from "../../../models";

export async function deleteSystemTargetTargets(
    id: string,
): Promise<number | null> {

    return await SystemTargetTargets.destroy({
        where: {
            id,
        },
    });

}
