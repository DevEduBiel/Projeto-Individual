var playlistModel = require("../models/musicaModel");

function mostrarMusica(req, res){
    // Crie uma variável que vá recuperar os valores do id
    var idUsuario = req.body.idServer;
    var idPlaylist = req.body.idPlaylistServer;

    // Faça as validações dos valores
    if (idUsuario == undefined && idPlaylist == undefined) {
        alert('Voce precisa fazer login!!')
    } else {

        // Passe os valores como parâmetro e vá para o arquivo playlistModel.js
        playlistModel.mostraMusica(idUsuario, idPlaylist)
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
    mostrarMusica
}