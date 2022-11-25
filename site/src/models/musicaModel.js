var database = require("../database/config")

function mostrarMusica
    (idUsuario, idPlaylist) {

    var instrucao = `
        select m.* from musica m join playlist_musica p
        on m.idMusica = p.fkMusica where p.fkCriador = '${idUsuario}' and p.fkPlaylist = '${idPlaylist}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    mostrarMusica
}