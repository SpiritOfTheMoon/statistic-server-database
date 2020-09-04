import { NumerationTable } from "../../../views";

export async function findMapAssociations(): Promise<NumerationTable[]> {

    return await NumerationTable.findAll();

}