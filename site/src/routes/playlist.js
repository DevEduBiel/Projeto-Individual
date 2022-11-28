var express = require("express");
var router = express.Router();

var playlistUsuario = require("../controllers/playlistController");

router.post("/mostrarPlaylist", function (req, res) {
    playlistUsuario.mostrarPlaylist(req, res);
})

router.post("/criarPlaylist", function (req, res) {
    playlistUsuario.criarPlaylist(req, res);
})

router.post("/deletarPlaylist", function (req, res) {
    playlistUsuario.deletarPlaylist(req, res);
})

router.post("/marcarFav", function (req, res) {
    playlistUsuario.marcarFav(req, res);
})

router.post("/marcarLike", function (req, res) {
    playlistUsuario.marcarLike(req, res);
})

router.post("/marcarDislike", function (req, res) {
    playlistUsuario.marcarDislike(req, res);
})

router.post("/buscarAvalicao", function (req, res) {
    playlistUsuario.buscarAvalicao(req, res);
})

module.exports = router;