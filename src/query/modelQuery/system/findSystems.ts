import { System } from "../../../models";

export async function findSystems(): Promise<System[]> {

    return await System.findAll();

}
