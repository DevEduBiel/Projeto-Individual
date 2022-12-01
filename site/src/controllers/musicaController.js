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
                        "\n Erro ao mostrar musica ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function deletarMusica(req, res) {
    // Crie uma variável que vá recuperar os valores do id , playlist e muscia
    var idPlaylist = req.body.idPlaylistServer;
    var idMusica = req.body.idMusicaServer;


        // Passe os valores como parâmetro e vá para o arquivo musica.Model.js
         MusicaModel.deletarMusica(idPlaylist, idMusica)
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

function adicionarMusica(req, res) {
    // Crie uma variável que vá recuperar os valores da musica nova
    var idPlaylist = req.body.idPlaylistServer;
    var nomeMus = req.body.nomeMusServer;
    var generoMus = req.body.generoMusServer;
    var artistaMus= req.body.artistaMusServer;
    var albumMus = req.body.albumMusServer;
    var duracaoMus = req.body.duracaoMusServer;

    MusicaModel.adicionarMusica(idPlaylist, nomeMus, generoMus, artistaMus, albumMus, duracaoMus)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\n Erro ao criar musica ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}


module.exports={
    mostrarMusica,
    deletarMusica,
    adicionarMusica
}