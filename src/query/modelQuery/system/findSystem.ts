import { System } from "../../../models";

export async function findSystem(
    id: string,
): Promise<System | null> {

    return await System.findOne({
        where: {
            id,
        },
    });

}
