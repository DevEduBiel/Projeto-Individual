var id = localStorage.getItem('ID_USUARIO');
var idPlaylist = localStorage.getItem('ID_PLAYLIST');

function opcoesCriador() {
    if (id != 0) {
        fetch("/playlist/opcoesCriador", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idPlaylistServer: idPlaylist,
            })
        }).then(function (resposta) {
            if (resposta.ok) {
                console.log(resposta);
                resposta.json().then(vetorCriador => {
                    document.getElementById("nomePlaylist").innerHTML = vetorCriador[0].nome
                    if (vetorCriador[0].fkCriador == id) {
                        localStorage.CRIADOR = vetorCriador[0].fkCriador 
                    } else{
                        document.getElementById("addmusica").innerHTML = ''
                    } 
                }
                );

            } else {

                console.log("Houve um erro ao pegar criador");

                resposta.text().then(texto => {
                    console.error(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

    }
    else {
        Swal.fire('Faça login primeiro')
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
                resposta.json().then(vetorAvaliacao => {       
                       if (vetorAvaliacao[0].favoritaUsu == 1) {
                           var checkbox = document.getElementById('fav');
                           checkbox.checked = true
                       }
                       if (vetorAvaliacao[0].likeUsu == 1) {
                           var checkbox = document.getElementById('like');
                           checkbox.checked = true
                           vetorAvaliacao[0].dislikeUsu = 0
                       }
                       if (vetorAvaliacao[0].dislikeUsu == 1) {
                           var checkbox = document.getElementById('dislike');
                           checkbox.checked = true
                           vetorAvaliacao[0].likeUsu = 0
                       }

                    document.getElementById('iconeAvalia').innerHTML = `<div class="avalia">
                <iconify-icon icon="mdi:heart-multiple" class="imgIcons" style="color: rgba(144, 0, 193, 1);"></iconify-icon>
                <span>${vetorAvaliacao[0].qtdFav}</span>
            </div>
            <div class="avalia">
                <iconify-icon icon="mdi:like" class="imgIcons" style="color: green;"></iconify-icon>
                <span>${vetorAvaliacao[0].qtdLike}</span>
            </div>
            <div class="avalia">
                <iconify-icon icon="mdi:dislike" class="imgIcons" style="color: red;"></iconify-icon>
                <span>${vetorAvaliacao[0].qtdDislike}</span>
            </div>
                `
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


function deletarPlaylist() {
    Swal.fire({
        title: 'Você realmente excluir esta playlist?',
        icon: 'warning',
        showDenyButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim',
        denyButtonText: `Cancelar`,
    }).then((result) => {
        if (result.isConfirmed) {
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
    })
   
}

function salvarPlaylist() {
    if (id != 0) {
        fetch("/playlist/salvarPlaylist", {
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
                Swal.fire({
                    title: 'Playlist salva',
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Voltar',
                })

            } else {
                Swal.fire({
                    title: 'Você já salvou esta playlist ',
                    icon: 'error',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Voltar',
                })
            }

        }).catch(function (erro) {
            console.log(erro);
        })

    }
}

function marcarFav() {
    var checkboxFav = document.getElementById('fav');
    var marcado = true;
    if (checkboxFav.checked) {
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
                buscarAvalicao()

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

function marcarLike() {
    var checkboxLike = document.getElementById('like');
    var marcado = true;
    if (checkboxLike.checked) {
        var dislike = document.getElementById('dislike');
        dislike.checked = false
        marcarDislike();
    } else {
        marcado = false;
    }
    if (id != 0) {
        fetch("/playlist/marcarLike", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idServer: id,
                idPlaylistServer: idPlaylist,
                marcarLikeSever: marcado
            })
        }).then(function (resposta) {
            if (resposta.ok) {
                buscarAvalicao()

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
function marcarDislike() {
    var checkboxDislike = document.getElementById('dislike');
    var marcado = true;
    if (checkboxDislike.checked) {
        var like = document.getElementById('like');
        like.checked = false
        marcarLike();
    } else {
        marcado = false;
    }
    if (id != 0) {
        fetch("/playlist/marcarDislike", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idServer: id,
                idPlaylistServer: idPlaylist,
                marcarDislikeSever: marcado
            })
        }).then(function (resposta) {
            if (resposta.ok) {
                buscarAvalicao()

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
    if (id != 0) {
        Swal.fire({
            title: 'Você realmente deseja sair?',
            icon: 'warning',
            showDenyButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            denyButtonText: `Cancelar`,
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.ID_USUARIO = 0
                window.location = "index.html";
            }
        })
    }
}
buscarAvalicao()

opcoesCriador()