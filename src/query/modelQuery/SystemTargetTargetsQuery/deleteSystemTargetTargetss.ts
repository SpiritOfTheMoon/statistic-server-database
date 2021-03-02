import { SystemTargetTargets } from "../../../models";

export async function deleteSystemTargetTargetss(): Promise<number | null> {

    return await SystemTargetTargets.destroy();

}
