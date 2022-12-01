var database = require("../database/config")

function mostrarMaisLike() {

    var instrucao = `
        select p.idPlaylist, p.nome , count(likeUsu)qtdLike from playlist p
        join avaliacao a on p.idPlaylist = a.fkPlaylist
        where likeUsu = 1
        group by p.idPlaylist
        order by qtdLike desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function mostrarMaisDislike() {

    var instrucao = `
        select p.idPlaylist, p.nome , count(dislikeUsu)qtdDislike from playlist p
        join avaliacao a on p.idPlaylist = a.fkPlaylist
        where dislikeUsu = 1
        group by p.idPlaylist
        order by qtdDislike desc;

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function mostrarMaisFav() {

    var instrucao = `
        select p.idPlaylist, p.nome , count(favoritaUsu)qtdFav from playlist p
        join avaliacao a on p.idPlaylist = a.fkPlaylist
        where favoritaUsu = 1
        group by p.idPlaylist
        order by qtdFav desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function mostrarTodasPlays() {

    var instrucao = `
        select idPlaylist, nome from playlist 
        group by idPlaylist
        order by idPlaylist desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



module.exports = {
    mostrarMaisLike,
    mostrarMaisDislike,
    mostrarMaisFav,
    mostrarTodasPlays

}