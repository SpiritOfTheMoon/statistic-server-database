import { Target } from "../../../models";

export async function findTarget(
    id: string,
): Promise<Target | null> {

    return await Target.findOne({
        where: {
            id,
        },
    });

}
