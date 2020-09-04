import { System, SystemCreationAttibutesType } from "../../../models";

export async function createSystem(
    value: SystemCreationAttibutesType,
): Promise<System> {

    const system = System.create(value);
    return system;

}
