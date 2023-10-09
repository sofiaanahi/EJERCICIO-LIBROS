import {model, Schema} from "mongoose";

// modelo de usuario
const UserSchema = new Schema ({

    user_name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        tpye: String,
        required: true
    }
});

 export const UserModel = model('User', UserSchema)
