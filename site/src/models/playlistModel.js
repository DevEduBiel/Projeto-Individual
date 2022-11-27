var database = require("../database/config")
function buscaPlaylist(idUsuario) {

    var instrucao = `
       select p.* from playlist p
       join playlist_salva ps on p.idPlaylist = ps.fkPlaylist
       where ps.fkUsuario = '${idUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function criarPlaylist(idUsuario) {

    var instrucao = `
    call CriarPlaylist(${idUsuario});
        `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletarPlaylist(idUsuario, idPlaylist) {

    var instrucao = `
    delete from playlist_salva where fkUsuario = ${idUsuario} and fkPlaylist = ${idPlaylist};
        `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    buscaPlaylist,
    criarPlaylist,
    deletarPlaylist

}