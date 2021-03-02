import { SystemTargetTargets } from "../../../models";

export async function findSystemTargetTargetss(): Promise<SystemTargetTargets[]> {

    return await SystemTargetTargets.findAll();

}
