import { BackendLogs } from "../../../models";

export async function findBackendLog(
    id: string,
): Promise<BackendLogs | null> {

    return BackendLogs.findOne({
        where: {
            id,
        },
    });

}
