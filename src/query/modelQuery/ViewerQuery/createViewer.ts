import {Viewer, ViewerCreationAttributesType} from "../../../models";

export async function createViewer(

    value: ViewerCreationAttributesType,

): Promise<Viewer> {

    try {

        return await Viewer.create(value);
    
    } catch (error) {

        console.error(error);
        throw error;
    
    }

}
