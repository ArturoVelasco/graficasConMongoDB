const mongoose =  require("mongoose");
//Da el maquetado o la estructura de que información lleva nuestra DB
//Se utiliza el required para decir que es extrictamente necesario completar esta parte
const ChannelSchema = mongoose.Schema({
    Fecha:{
        type: String,
        required: true
    },
    Hora:{
        type: String,
        required: true
    },
    Name:{
        type: String,
        required: true
    },
    IntegralBanda1:{
        type: String,
        required: true
    },
    IntegralBanda2:{
        type: String,
        required: true
    },
    IntegralBanda3:{
        type: String,
        required: true
    },
    IntegralBanda4:{
        type: String,
        required: true
    },
    IntegralBanda5:{
        type: String,
        required: true
    }
});

module.exports =  mongoose.model('channel',ChannelSchema);
