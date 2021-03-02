import { Viewer } from "../../../models";

export async function deleteViewers(): Promise<number | null> {

    return await Viewer.destroy();

}
