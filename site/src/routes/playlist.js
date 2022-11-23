var express = require("express");
var router = express.Router();

var playlistUsuario = require("../controllers/playlistController");

router.post("/mostrarPlaylist", function (req, res) {
    playlistUsuario.mostrarPlaylist(req, res);
})

router.post("/criarPlaylist", function (req, res) {
    playlistUsuario.criarPlaylist(req, res);
})

module.exports = router;