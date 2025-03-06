import express from 'express'
import dotenv from 'dotenv';
import { dbConnection } from './db/db.js';
import bodyParser from 'body-parser';
import cors from 'cors'
import { esewaRouter } from './Routes/esewa.route.js';
import { CodController } from './Controllers/cod.controller.js';
dotenv.config();

const port = process.env.PORT || 4000
const app = express();
app.use(bodyParser.json())
app.use(cors())
dbConnection()



app.get('/',(req,res)=>{
  res.send("hello")
  console.log("hello i am at landing page")
  
})


app.listen(port,()=>{
  console.log(`http://localhost:${port}`)
})

app.use('/esewa',esewaRouter)
app.use('/cod',CodController)
