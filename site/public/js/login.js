function autenticar() {
    var emailVar = email.value;
    var senhaVar = senha.value;

    if (emailVar == "" || senhaVar == "") {

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-right',
            iconColor: 'white',
            customClass: {
                popup: 'colored-toast'
            },
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true
        })
        Toast.fire({
            icon: 'error',
            title: 'Os campos estão vazios, preencha corretamente '
        })
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

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-right',
                iconColor: 'white',
                customClass: {
                    popup: 'colored-toast'
                },
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true
            })
            Toast.fire({
                icon: 'error',
                title: 'Email ou senha estão incorretos!!'
            })
        }

    }).catch(function (erro) {
        console.log(erro);
    })

}

function mostrarSenha() {
    const mostrar = document.getElementById("senha");


    // Se o botão for selecionado, ele mostrará a senha
    if (mostrar.type == "password") {
        mostrar.type = "text";

    }

    // Se o botão for desselecionado, ele esconderá a senha
    else {
        mostrar.type = "password";
    }
}