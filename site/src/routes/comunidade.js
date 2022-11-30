var express = require("express");
var router = express.Router();

var Comunidade = require("../controllers/comunidadeController");

router.post("/mostrarMaisLike", function (req, res) {
    Comunidade.mostrarMaisLike(req, res);
})

router.post("/mostrarMaisDislike", function (req, res) {
    Comunidade.mostrarMaisDislike(req, res);
})
router.post("/mostrarMaisFav", function (req, res) {
    Comunidade.mostrarMaisFav(req, res);
})

router.post("/mostrarTodasPlays", function (req, res) {
    Comunidade.mostrarTodasPlays(req, res);
})




module.exports = router;