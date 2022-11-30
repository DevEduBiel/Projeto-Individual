var database = require("../database/config")

function mostrarMusica(idPlaylist) {

    var instrucao = `
        select m.* from musica m join musica_salva s
        on m.idMusica = s.fkMusica 
        where s.fkPlaylist = '${idPlaylist}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletarMusica(idPlaylist) {

    var instrucao = `
        select m.* from musica m join musica_salva s
        on m.idMusica = s.fkMusica 
        where s.fkPlaylist = '${idPlaylist}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    mostrarMusica,
    deletarMusica
}