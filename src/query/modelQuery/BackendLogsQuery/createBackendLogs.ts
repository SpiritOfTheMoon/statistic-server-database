import {BackendLogs, BackendLogsCreationAttributes} from "../../../models";
import {Transaction} from "sequelize";

export async function createBackendLogs(

    values: BackendLogsCreationAttributes[],
    transaction?: Transaction,

): Promise<BackendLogs[]> {
try {

    return await BackendLogs.bulkCreate(values, {
        returning: true,
        transaction,
    });
} catch (error) {
    console.error(error);
    throw error;
}

}
