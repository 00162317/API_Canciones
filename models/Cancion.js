const mongoose = require('mongoose'),
    Schemma = mongoose.Schema


let Cancion = new Schemma({
    name:String,
    artista:String,
    anio:Number,
    album:String
});

module.exports=mongoose.model('CancionModelo',Cancion)