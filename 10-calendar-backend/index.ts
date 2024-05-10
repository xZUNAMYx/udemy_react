const express = require('express');
require('dotenv').config();


//Crear el servidor de express
const app = express();


//Directorio publico
app.use( express.static('public') );

//Rutas
// app.get('/', (req: any, res: any) => {  
//     res.json({
//         ok: true
//     })
// })


//Escuchar peticiones
app.listen( process.env.PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
})