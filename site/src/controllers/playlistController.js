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

function buscarAvalicao(req, res) {
    // Crie uma variável que vá recuperar os valores do id
    var idPlaylist = req.body.idPlaylistServer;
    var idUsuario = req.body.idServer;


    // Faça as validações dos valores
    if ( idPlaylist == undefined && idUsuario == undefined) {
        alert('Voce precisa fazer login!!')
    } else {

        // Passe os valores como parâmetro e vá para o arquivo playlistModel.js
        playlistModel.buscarAvalicao(idUsuario, idPlaylist)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\n Erro no avaliar ",
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

function deletarPlaylist(req, res) {
    // Crie uma variável que vá recuperar os valores do id
    var idUsuario = req.body.idServer;
    var idPlaylist = req.body.idPlaylistServer;


    // Faça as validações dos valores
    if (idUsuario == undefined && idPlaylist == undefined) {
        alert('Voce precisa fazer login!!')
    } else {

        // Passe os valores como parâmetro e vá para o arquivo playlistModel.js
        playlistModel.deletarPlaylist(idUsuario, idPlaylist)
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

function marcarFav(req, res) {
    // Crie uma variável que vá recuperar os valores do id
    var marcar = req.body.marcarFavSever;
    var playlist = req.body.idPlaylistServer;
    var usuario = req.body.idServer;


    // Faça as validações dos valores
    if (marcar == undefined && playlist == undefined && usuario == undefined) {
        alert('Voce precisa fazer login!!')
    } else {

        // Passe os valores como parâmetro e vá para o arquivo playlistModel.js
        playlistModel.marcarFav(usuario, playlist, marcar)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\n Erro ao favoritar playlist ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}



module.exports = {
    mostrarPlaylist,
    buscarAvalicao,
    criarPlaylist,
    deletarPlaylist,
    marcarFav
}