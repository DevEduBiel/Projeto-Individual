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

function marcarFav(usuario, playlist, marcar) {

    var instrucao = `
    call marcarFav(${usuario},${playlist},${marcar});
        `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function marcarLike(usuario, playlist, marcar) {

    var instrucao = `
    call marcarLike(${usuario},${playlist},${marcar});
        `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function marcarDislike(usuario, playlist, marcar) {

    var instrucao = `
    call marcarDislike(${usuario},${playlist},${marcar});
        `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarAvalicao(idPlaylist, idUsuario) {

    var instrucao = `
    select favoritaUsu,dislikeUsu,likeUsu,
    (select count(favoritaUsu) from avaliacao where favoritaUsu= 1)qtdFav, 
    (select count(dislikeUsu) from avaliacao where dislikeUsu= 1)qtdDislike, 
    (select count(likeUsu) from avaliacao where likeUsu= 1)qtdLike 
    from avaliacao where fkUsuario = ${idPlaylist} and fkPlaylist = ${idUsuario};
        `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    buscaPlaylist,
    buscarAvalicao,
    criarPlaylist,
    deletarPlaylist,
    marcarFav,
    marcarLike,
    marcarDislike

}