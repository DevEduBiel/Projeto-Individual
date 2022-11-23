function autenticar() {
    var emailVar = email.value;
    var senhaVar = senha.value;

    if (emailVar == "" || senhaVar == "") {
        return false;
    }
    else {
        setInterval(5000)
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/registro/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(vetorUsuario => {
                console.log(vetorUsuario);
                console.log(JSON.stringify(vetorUsuario));

                sessionStorage.EMAIL_USUARIO = vetorUsuario.email;
                sessionStorage.NOME_USUARIO = vetorUsuario.nome;
                localStorage.ID_USUARIO = vetorUsuario.idUsuario;

                window.location = "index.html";
            }
            );

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

}
