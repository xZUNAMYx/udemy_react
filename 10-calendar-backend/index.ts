// const express = require('express'); 
import express from 'express'; //TODO: forma de usar express con typescript 
require('dotenv').config();
const cors = require('cors');
const { dbConection } = require('./database/config'); 


//Crear el servidor de express
const app = express();


//Base de datos mongo
dbConection();


// CORS
app.use(cors());


//Directorio publico
app.use( express.static('public') );


//Lectura y parseo del body
app.use( express.json() );


//Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));
// TODO: CRUD: Eventos


//Escuchar peticiones
app.listen( process.env.PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
})