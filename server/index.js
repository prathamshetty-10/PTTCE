import express from 'express'
import cors from 'cors'

import morgan from 'morgan'

import AllRoutes from './Routes/All.js'

const app=express();
import config from 'dotenv'
config.config();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use('/api',AllRoutes);



const server=app.listen(process.env.PORT,()=>{
    console.log(`connected to server port ${process.env.PORT}`);
})