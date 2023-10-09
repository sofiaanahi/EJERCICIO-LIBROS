import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { connectMongoDb } from './src/config/connection.js';
import fileUpload from 'express-fileupload';
import path from 'node:path';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

//middlewares

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));  
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    fileUpload({
        createParentPath: true,
        limits: { fileSize: 20 * 1024 * 1024 },
        abortOnLimit: true,
        responseOnLimit: 'Archivo muy grande',
    })
);




app.listen(PORT, ()=>{
    console.log(`listening on http://localhost:${PORT}`)
    connectMongoDb();
})