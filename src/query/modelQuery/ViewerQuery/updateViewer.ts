import { Viewer } from "../../../models";

export async function updateViewerIdentifier(
    id: string, updateIdentifier: string
): Promise<void> {
    
    try {

        await Viewer.update({
            identifier: updateIdentifier,
        }, {
            where: {
                id, 
            },
        });
        
    } catch (error) {

        console.error(error);
        throw error;
    
    }

}
