var express = require("express");
var router = express.Router();

var registroController = require("../controllers/registroController");

router.post("/cadastrar", function (req, res) {
    registroController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    registroController.autenticar(req, res);
})

module.exports = router;