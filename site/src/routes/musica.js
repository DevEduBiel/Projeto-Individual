var express = require("express");
var router = express.Router();

var playlistUsuario = require("../controllers/musicaController");

router.post("/mostrarMusica", function (req, res) {
    playlistUsuario.mostrarPlaylist(req, res);
})


module.exports = router;