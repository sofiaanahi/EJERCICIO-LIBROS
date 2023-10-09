import mongoose from 'mongoose';


export const connectMongoDb = async () => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/ejercicio-libros')
        console.log("Conexión a MongoDB exitosa")
    }catch( error ) {
        console.error(`Error al conectar con Mongo DB ${error.message}`)
    }
}