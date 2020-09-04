import { BackendLogs } from "../../../models";
import { Op } from "sequelize";

export async function findBackendLogs(
    fromDate: Date,
    systemId: string,
): Promise<BackendLogs[]> {

    return BackendLogs.findAll({
        where: {
            systemId,
            date: {
                [Op.gte]: fromDate,
            },
        },
    });

}
