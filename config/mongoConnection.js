const mongoose = require('mongoose')
const mongoConnection = async () => {
    try{
        await mongoose.connect(process.env.URL)
        console.log("Established");
    }
     catch(err){
        console.log("Not Connected",err);
     }
 }

 module.exports = mongoConnection