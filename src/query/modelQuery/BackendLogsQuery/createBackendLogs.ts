import { BackendLogs, BackendLogsCreationAttibutesType } from "../../../models";
import { Transaction } from "sequelize";
export async function createBackendLogs(

    values: BackendLogsCreationAttibutesType[],
    transaction?: Transaction,

): Promise<BackendLogs[]> {
try {
    
    const dataValues = await BackendLogs.bulkCreate(values, {
        returning: true,
        transaction,
    });
    return dataValues;
} catch (error) {
    console.error(error);
    throw error;
}

}
