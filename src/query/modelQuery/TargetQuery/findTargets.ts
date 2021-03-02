import { Target } from "../../../models";

export async function findTargets(): Promise<Target[]> {

    return await Target.findAll();

}
