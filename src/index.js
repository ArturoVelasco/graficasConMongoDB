//importamos todo lo necesario
const express= require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const ChannelRoutes = require("./routes/Canal1");
//Decalaramos que usaremos el puerto 9000 para evitar obstaculos con el 8080
const app = express();
const port = process.env.PORT || 9000;

//middleware
//Con esta parte estamos diciendo que nos traiga en formato json la información del api
app.use(express.json());
app.use('/api',ChannelRoutes);



//routes
//Mandamos un alert que nos diga que ya estamos conectados al api que estamos haciendo.
app.get('/',(req,res) =>{
    res.send('Bienvenido a mi API - Issac');
}); 

//mongoDB conecction
//Se concecta a la BD de MongoDB y nos Manda un alert en la terminal 
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Conectado a Mongo  DB Atlass"))
.catch((error) => console.error(error));

app.listen(port, ()=> console.log('sever listening on port',port));


