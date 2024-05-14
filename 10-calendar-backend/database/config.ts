const mongoose = require('mongoose');

const dbConection = async() =>{

    try {
        await mongoose.connect(process.env.DB_CNN);
        console.log('DB online');

    } catch (error) {
        console.log(error);
        throw new Error("Error al conectar a la base de datos");
        
    }
}

module.exports = {
    dbConection
}