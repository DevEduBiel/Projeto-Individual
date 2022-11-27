var express = require("express");
var router = express.Router();

var MusicaUsuario = require("../controllers/musicaController");

router.post("/mostrarMusica", function (req, res) {
    MusicaUsuario.mostrarMusica(req, res);
})

router.post("/deletarMusica", function (req, res) {
    MusicaUsuario.deletarMusica(req, res);
})



module.exports = router;