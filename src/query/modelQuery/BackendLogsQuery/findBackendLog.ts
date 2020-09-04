import { BackendLogs } from "../../../models";
import { Op } from "sequelize";

export async function findBackendLog(
    id: string,
): Promise<BackendLogs | null> {

    return BackendLogs.findOne({
        where: {
            id,
        },
    });

}
