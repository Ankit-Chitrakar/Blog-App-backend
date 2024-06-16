const mongoose = require('mongoose');
require('dotenv').config();

const connectToDB = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log(`DB connected successfully.`);
    }) 
    .catch((err)=>{
        console.log(err.message);
        console.error(err);
        process.exit(1);
    })
}

module.exports = connectToDB;