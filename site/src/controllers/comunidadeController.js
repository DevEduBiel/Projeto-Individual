var ComunidadeModel = require("../models/comunidadeModel");

function mostrarTodasPlays(req, res) {

    ComunidadeModel.mostrarTodasPlays()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\n Erro mostrarTodasPlays ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function mostrarMaisDislike(req, res) {

    ComunidadeModel.mostrarMaisDislike()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\n Erro mostrarMaisDislike ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function mostrarMaisLike(req, res) {
   
    ComunidadeModel.mostrarMaisLike()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\n Erro mostrarMaisLike ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function mostrarMaisFav(req, res) {
    ComunidadeModel.mostrarMaisFav()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\n Erro mostrarMaisFav ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    mostrarMaisLike,
    mostrarMaisFav,
    mostrarTodasPlays,
    mostrarMaisDislike
}