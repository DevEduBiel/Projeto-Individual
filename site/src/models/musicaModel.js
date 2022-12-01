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

function deletarMusica(idPlaylist, idMusica) {

    var instrucao = `
        delete from musica_salva where fkPlaylist = ${idPlaylist} and fkMusica =${idMusica};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function adicionarMusica(idPlaylist, nomeMus, generoMus, artistaMus, albumMus, duracaoMus) {

    var instrucao = `
        call AdicionarMusica(${idPlaylist},'${nomeMus}','${generoMus}','${artistaMus}','${albumMus}','00:${duracaoMus}')
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    mostrarMusica,
    deletarMusica,
    adicionarMusica
}