import {model, Schema} from "mongoose";

// modelo de libro

const BookSchema = new Schema ({
    
    title: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    publication_year: {
        type: String,
        required: true
    },
    image: {
        name: String,
        data: Buffer,
        type: String
    },
    // vinculamos el modelo de libros con el de autores
    Author:{
        type: Schema.Types.ObjectId,
        ref:'Author'
    },
    
});


export const BookModel = model('Book',BookSchema);
