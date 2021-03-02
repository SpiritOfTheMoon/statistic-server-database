import { Target } from "../../../models";

export async function deleteTargets(): Promise<number | null> {

    return await Target.destroy();

}
