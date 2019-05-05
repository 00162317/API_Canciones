const mongoose = require('mongoose')
var cancionModelo = require('../models/Cancion')

const cancionController={};

/* GET users listing. */
function erroraxo(err, parametro, res) {
  if (err) {
    res.status(500);
    res.json({
      ok: false, err
    });
  }
  else {
    res.json({
      ok: true, parametro
    })
  }
}

cancionController.getAll = function (req, res, next) {
  cancionModelo.find({}, function (err, parametro) {
    erroraxo(err, parametro, res);
  });
};

cancionController.getByName = function (req, res) {
  cancionModelo.findOne({name: req.params.name}, 
    function (err, parametro) {
    erroraxo(err, parametro, res);
  });
};

cancionController.getById = function (req, res, next) {
  var id = req.params.id;
  
  if (id === "") {
    res.json({ "ok": false })
  } else {
    cancionModelo.findById(id,function(err,parametro){
      erroraxo(err,parametro,res);
    })
  }
};

cancionController.insertar = function(req,res,next){
  let data= new cancionModelo({
    nombre:req.body.nombre,
    artista:req.body.artista,
    anio:req.body.anio,
    album:req.body.album
  });

  data.save(function(err,parametro){
    erroraxo(err,parametro,res);
  });
};

cancionController.delete=function(req,res){
  cancionModelo.findByIdAndRemove(req.params.id,function(err,parametro){
    erroraxo(err,parametro,res);
  });
};

cancionController.update=function(req,res){
  let update={
    nombre:req.body.nombre,
    artista:req.body.artista,
    anio:req.body.anio,
    album:req.body.album
  };
  cancionModelo.findByIdAndUpdate(req.params.id,update,function(err,parametro){
    erroraxo(err,parametro,res);
  });
};

module.exports=cancionController