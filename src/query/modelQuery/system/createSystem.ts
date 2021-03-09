import { System, SystemCreationAttributes } from "../../../models";

export async function createSystem(
    value: SystemCreationAttributes,
): Promise<System> {

    const system = System.create(value);
    return system;

}
