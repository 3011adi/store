import express, { request, response } from "express";
import { PORT,mangoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Item } from "./models/itemModel.js";
import itemsRoute from "./routes/itemsRoute.js"
import cors from 'cors';
const app = express();

app.use(express.json());

app.use(cors());

app.get('/',(request,response) => {
    console.log(request);
    return response.status(234).send('welcome') ;
     

});

app.use('/items',itemsRoute)

mongoose
.connect(mangoDBURL)
.then( () =>{
   console.log('connected');
 
  
})

.catch( (error) =>{
    console.log(error);
})

app.listen(PORT, () =>{
    console.log(`current port : ${PORT}`);

});
