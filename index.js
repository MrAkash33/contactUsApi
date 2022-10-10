const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const dotenv = require('dotenv');
const mongoConnection = require('./config/mongoConnection');
const router = require('./routes/routes');
const app =  express();
dotenv.config();
app.use(cors());
app.use(express.json())
const port = process.env.PORT

mongoConnection()
app.use("/api/v1",router)
app.listen(port,()=>{
    console.log("app Listen on port ",port)
})