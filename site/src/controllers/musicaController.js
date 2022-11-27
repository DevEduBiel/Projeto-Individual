var MusicaModel = require("../models/musicaModel");

function mostrarMusica(req, res){
    // Crie uma variável que vá recuperar os valores do id
    var idPlaylist = req.body.idPlaylistServer;

    // Faça as validações dos valores
    if (idPlaylist == undefined) {
        alert('Voce precisa fazer login!!')
    } else {

        // Passe os valores como parâmetro e vá para o arquivo playlistModel.js
        MusicaModel.mostrarMusica(idPlaylist)
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

function deletarMusica(req, res) {
    // Crie uma variável que vá recuperar os valores do id , playlist e muscia
    var idUsuario = req.body.idServer;
    var idPlaylist = req.body.idPlaylistServer;
    var idMusica = req.body.idMusicaServer;


        // Passe os valores como parâmetro e vá para o arquivo musica.Model.js
         MusicaModel.deletarMusica(idUsuario,idPlaylist, idMusica)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\n Erro ao deletar musica ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


module.exports={
    mostrarMusica,
    deletarMusica
}