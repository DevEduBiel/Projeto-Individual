var playlistModel = require("../models/playlistModel");
function mostrarPlaylist(req, res) {
    // Crie uma variável que vá recuperar os valores das playlists
    var idUsuario = req.body.idServer;
    

    // Faça as validações dos valores
    if (idUsuario == undefined) {
        console.log('idUsuario esta nulo')
    } else {

        // Passe os valores como parâmetro e vá para o arquivo playlistModel.js
        playlistModel.buscaPlaylist(idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\n Erro ao puxar as playlists ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function criarPlaylist(req, res) {
    // Crie uma variável que vá recuperar os valores do id
    var idUsuario = req.body.idServer;


    // Faça as validações dos valores
    if (idUsuario == undefined) {
        alert('Voce precisa fazer login!!')
    } else {

        // Passe os valores como parâmetro e vá para o arquivo playlistModel.js
        playlistModel.criarPlaylist(idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\n Erro ao criar as playlists ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports={
    mostrarPlaylist,
    criarPlaylist
}