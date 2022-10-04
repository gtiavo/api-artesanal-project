const mongoose = require("mongoose");


const dbMongose = async() => {
    try {
        await mongoose.connect( process.env.DB_CNN );
    
         console.log('DB Online');
    
    
     } catch (error) {
         console.log(error);
         throw new Error('Error initializing DB');
     }
}

module.exports = dbMongose;