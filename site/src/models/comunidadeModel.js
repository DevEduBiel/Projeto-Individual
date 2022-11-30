var database = require("../database/config")

function mostrarMaisLike(email) {

    var instrucao = `
       select * from usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function mostrarMaisDislike() {

    var instrucao = `
       select * from usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function mostrarMaisFav() {

    var instrucao = `
       select * from usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function mostrarTodasPlays() {

    var instrucao = `
       select * from usuario;
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