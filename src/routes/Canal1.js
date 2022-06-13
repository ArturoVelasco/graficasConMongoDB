const express = require("express");
const ChannelSchema = require("../models/Canal1");
const router =  express.Router();

//Crear el metodo post y nos arroja un alert en caso de que falle
router.post("/channels", (req,res) =>{
    const channel = ChannelSchema(req.body);
    channel 
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));

});

//Crea el metodo get para toda la info del api
router.get("/channels", (req,res) =>{
    ChannelSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));

});

//Crea el metodo get para solo un id del api
router.get("/channels/:Name", (req,res) =>{
    const { Name } = req.params;
    ChannelSchema
    .findByName(Name)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));

});


module.exports = router;
