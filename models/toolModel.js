import { BaseModel } from 'sooky-interfaces/src/models/BaseModel.js';

class ToolModel extends BaseModel {
    static modelName = "Tool";

    static schema = {
        name: { type: String, required: true },
        type: { type: String, required: true },
        // ... autres champs ...
    };

    constructor() {
        super(ToolModel.schema); // Passe le schéma au constructeur de BaseModel
    }
}

export default new ToolModel().getModel(); // Exporte le modèle Mongoose prêt à l'emploi