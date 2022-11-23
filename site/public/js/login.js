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
                sessionStorage.ID_USUARIO = vetorUsuario.idUsuario;

                playlistUsuario()
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


function playlistUsuario() {
    const id = sessionStorage.ID_USUARIO;
    fetch("/playlist/mostrarPlaylist", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idServer: id,
        })
    }).then(function (resposta) {
        if (resposta.ok) {
            console.log(resposta);
            resposta.json().then(vetorPlaylist => {
                console.log(vetorPlaylist);

        
                // < div class="blocoPlay" >
                //             <div class="playlist">
                //                 <iconify-icon icon="mdi:playlist-music" class="imgIcons roxo"></iconify-icon>
                //             </div>
                //             <span class="txtSubTexto">Playlist-01</span>
                //         </ >
            }
            );

        } else {

            console.log("Houve um erro ao pegar as playlists");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

}

function criarPlaylist() {
    const id = sessionStorage.ID_USUARIO;
    fetch("/playlist/criarPlaylist", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idServer: id,
        })
    }).then(function (resposta) {
        if (resposta.ok) {
            console.log(resposta);
            resposta.json().then(vetorPlaylist => {
                console.log(vetorPlaylist);


                // < div class="blocoPlay" >
                //             <div class="playlist">
                //                 <iconify-icon icon="mdi:playlist-music" class="imgIcons roxo"></iconify-icon>
                //             </div>
                //             <span class="txtSubTexto">Playlist-01</span>
                //         </ >
            }
            );

        } else {

            console.log("Houve um erro ao pegar as playlists");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

}