import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app=express();

app.use(body-parser.json({limit:"30 mb" , extended: true}));
app.use(body-parser.urlencoded({limit:"30 mb" , extended: true}));
app.use(cors());

const CONNECTION_URL='mongodb+srv://shilpi:<WWTBNvJX9HNdqZvo>@cluster0.zhgui3w.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT ||5000;

mongoose.connect(CONNECTION_URL, {userNewUrlParser:true,useUnifiedTopology:true})
    .then(()=> app.listen(PORT, ()=> console.log('Server running on: ${PORT}')))
    .catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify',false);