id = localStorage.getItem('ID_USUARIO');

window.onload = function playlistUsuario() {
if (id!=0) {
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
                localStorage.PLAYLISTS = vetorPlaylist
                document.getElementById("suaPlaylist").innerHTML = ""

                for (var contador = 0; contador < vetorPlaylist.length; contador++) {
                    document.getElementById("musicasPlaylist").innerHTML += `
                    <a onClick="ativafuncao(this.id)" class="blocoPlay" id=${vetorPlaylist[contador].idPlaylist} >
                            <div class="playlist">
                                <iconify-icon icon="mdi:playlist-music" class="imgIcons roxo"></iconify-icon>
                           </div>
                           <span class="txtSubTexto">${vetorPlaylist[contador].nome}</span>
                       </a>
                       `   
                }
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
}

function deslogar(){
    localStorage.ID_USUARIO = 0
    window.location.reload(false);
}

function criarPlaylist() {
    if (id != 0) {
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
                window.location.reload(false);
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
}

function ativafuncao(clicked_id) {
    localStorage.ID_PLAYLIST = clicked_id
    window.location = "playlist.html";
}