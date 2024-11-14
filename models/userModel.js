import { BaseModel } from 'sooky-interfaces/src/models/BaseModel.js';

class UserModel extends BaseModel {
    static modelName = "User";

    static schema = {
        email: { type: String, required: true },
        password: { type: String, required: true },
        // Ajoutez d'autres champs ici si nécessaire
    };

    constructor() {
        super(UserModel.schema); // Passe le schéma au constructeur de BaseModel
    }
}

export default new UserModel().getModel(); // Exporte le modèle Mongoose prêt à l'emploi