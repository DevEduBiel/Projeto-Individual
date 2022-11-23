var database = require("../database/config")
function buscaPlaylist(idUsuario) {

    var instrucao = `
        SELECT p.idPlaylist, p.nome  FROM playlist p join usuario u 
        on p.fkCriador = u.idUsuario WHERE u.idUsuario = '${idUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function criarPlaylist
    (idUsuario) {

    var instrucao = `
        INSERT INTO playlist (nome, likes, deslikes, favorita, fkCriador) VALUES ('teste', '0', '0', '0', '${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscaPlaylist,
    criarPlaylist
}