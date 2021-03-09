import { Viewer, ViewerCreationAttributes } from "../../../models";

export async function createViewer(

    value: ViewerCreationAttributes,

): Promise<Viewer> {

    try {

        return await Viewer.create(value);
    
    } catch (error) {

        console.error(error);
        throw error;
    
    }

}
