id = localStorage.getItem('ID_USUARIO');
idPlaylist = localStorage.getItem('ID_PLAYLIST');
playlistUsuario() 

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
                resposta.json().then(vetorPlaylist => {
                    sessionStorage.setItem('PLAYLISTS', JSON.stringify(vetorPlaylist));
                    document.getElementById("suaPlaylist").innerHTML = ""
                    document.getElementById("suaPlaylist").innerHTML += `<span class=" txtSubTitulo txtPlaylistSalva">Playlists criadas :</span>`
                    document.getElementById("loginUsuario").style.display = 'none'
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


function criarPlaylist() {
    if (id != 0) {
        Swal.fire({
            title: 'Qual nome da sua Playlist',
            input: 'text',
            customClass: {
                validationMessage: 'my-validation-message'
            },
            preConfirm: (value) => {
                if (!value) {
                    Swal.showValidationMessage(
                        '<i class="fa fa-info-circle"></i> Coloque um nome para sua playlist'
                    )
                }else{
                    fetch("/playlist/criarPlaylist", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            idServer: id,
                            nomeServer: value
                        })
                    }).then(function (resposta) {
                        if (resposta.ok) {
                            console.log(resposta);
                            resposta.json().then(deletar => {
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
        })

    

    }
    else {
        Swal.fire('Faça login primeiro')
    }
}

function ativafuncao(clicked_id) {
    localStorage.ID_PLAYLIST = clicked_id
    window.location = "playlist.html";
}



function deslogar() {
    if (id!=0){
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

