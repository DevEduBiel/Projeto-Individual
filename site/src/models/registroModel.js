var database = require("../database/config")
function cadastrar(email, senha, nome, sobrenome, idade, genero, treino) {

    var instrucao = `
        INSERT INTO usuario  (nome, sobrenome, idade, favGenero, treinoSemana, email,senha) VALUES ('${nome}', '${sobrenome}', ${idade}, '${genero}', '${treino}', '${email}', '${senha}');
    `;
    return database.executar(instrucao)
}


function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
   cadastrar,
   autenticar
}