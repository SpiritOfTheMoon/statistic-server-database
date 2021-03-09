import { Target } from "../../../models";

export async function deleteTargets(): Promise<Target[]> {

    const deletedTargets = await Target.findAll();
    try {

        await Target.destroy({
            where: {

            },
        });
        return deletedTargets;

    } catch (error) {

        console.error(error);
        throw error;

    }

}
