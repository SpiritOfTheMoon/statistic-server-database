import { Target } from "../../../models";

export async function deleteTarget(
    id: string,
): Promise<number | null> {

    return await Target.destroy({
        where: {
            id,
        },
    });

}
