import { Viewer } from "../../../models";

export async function findViewers(): Promise<Viewer[]> {

    return await Viewer.findAll();

}
