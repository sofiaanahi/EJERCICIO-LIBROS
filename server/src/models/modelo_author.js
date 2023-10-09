import {model, Schema} from "mongoose";

//modelo de autor

const AuthorSchema = new Schema ({

    name: {
        type: String,
        required: true
    },
    sur_name: {
        type: String,
        required: true
    },

    biography: {
        type: String,
        required: true
    },

    books: [{
        type: Schema.Types.ObjectId,
        ref:'book'
    }]
});

export const AuthorModel = model('Author', AuthorSchema);

