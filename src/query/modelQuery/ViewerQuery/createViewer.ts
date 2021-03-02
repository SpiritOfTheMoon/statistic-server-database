import { Viewer, ViewerCreationAttributesType } from "../../../models";

export async function createViewer(

    value: ViewerCreationAttributesType,

): Promise<Viewer> {

    try {
        
        const viewer = await Viewer.create(value);
        return viewer;
    
    } catch (error) {

        console.error(error);
        throw error;
    
    }

}
