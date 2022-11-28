id = localStorage.getItem('ID_USUARIO');
idPlaylist = localStorage.getItem('ID_PLAYLIST');
window.onload = playlistUsuario() + buscarAvalicao()

function playlistUsuario() {
    if (id != 0) {
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
                    sessionStorage.setItem('PLAYLISTS', JSON.stringify(vetorPlaylist));
                    document.getElementById("suaPlaylist").innerHTML = ""
                    document.getElementById("suaPlaylist").innerHTML += `<span class=" txtSubTitulo txtPlaylistSalva">Playlists criadas :</span>`

                    for (var contador = 0; contador < vetorPlaylist.length; contador++) {
                        if (id == vetorPlaylist[contador].fkCriador) {
                            document.getElementById("suaPlaylist").innerHTML += `
                    <a onClick="ativafuncao(this.id)" class="blocoPlay" id=${vetorPlaylist[contador].idPlaylist} >
                            <div class="playlist">
                                <iconify-icon icon="mdi:playlist-music" class="imgIcons roxo"></iconify-icon>
                           </div>
                           <span class="txtSubTexto nome">${vetorPlaylist[contador].nome}</span>
                       </a>
                       `
                        }
                    }
                    document.getElementById("suaPlaylist").innerHTML += `<span class="txtSubTitulo txtPlaylistSalva">Playlists salvas :</span>`
                    for (var contador = 0; contador < vetorPlaylist.length; contador++) {
                        if (id != vetorPlaylist[contador].fkCriador) {
                            document.getElementById("suaPlaylist").innerHTML += `
                    <a onClick="ativafuncao(this.id)" class="blocoPlay" id=${vetorPlaylist[contador].idPlaylist} >
                            <div class="playlist">
                                <iconify-icon icon="mdi:playlist-music" class="imgIcons roxo"></iconify-icon>
                           </div>
                           <span class="txtSubTexto nome">${vetorPlaylist[contador].nome}</span>
                       </a>
                       `
                        }
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

function buscarAvalicao() {
    if (idPlaylist != 0) {
        fetch("/playlist/buscarAvalicao", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idServer: id,
                idPlaylistServer: idPlaylist
            })
        }).then(function (resposta) {
            if (resposta.ok) {
                console.log(resposta);
                resposta.json().then(vetorAvaliacao => {
                    if (vetorAvaliacao[0].favoritaUsu == 1) {
                        var checkbox = document.getElementById('fav');
                        checkbox.checked = true
                    }
                }
                );

            } else {

                console.log("Houve um erro ao retornar as avalicoes");

                resposta.text().then(texto => {
                    console.error(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

    }
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



function deletarPlaylist() {
    if (id != 0) {
        fetch("/playlist/deletarPlaylist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idServer: id,
                idPlaylistServer: idPlaylist
            })
        }).then(function (resposta) {
            if (resposta.ok) {
                window.location = "index.html";

            } else {

                console.log("Houve um erro ao deletar a playlist");

                resposta.text().then(texto => {
                    console.error(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

    }
}

function marcarFav() {
    var checkbox = document.getElementById('fav');
    var marcado = true;
    if (checkbox.checked) {
    } else {
        marcado = false;
    }
    if (id != 0) {
        fetch("/playlist/marcarFav", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idServer: id,
                idPlaylistServer: idPlaylist,
                marcarFavSever: marcado
            })
        }).then(function (resposta) {
            if (resposta.ok) {


            } else {

                console.log("Houve um erro ao marcar favorito");

                resposta.text().then(texto => {
                    console.error(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

    }

}


function deslogar() {
    localStorage.ID_USUARIO = 0
    window.location = "index.html";
}