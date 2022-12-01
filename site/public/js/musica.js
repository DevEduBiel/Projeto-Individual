id = localStorage.getItem('ID_USUARIO');
idPlaylist = localStorage.getItem('ID_PLAYLIST');
criador = localStorage.getItem('CRIADOR');
var musicas = []

window.onload = function mostrarMusica() {
    if (id != 0) {
        fetch("/musica/mostrarMusica", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idPlaylistServer: idPlaylist,
            })
        }).then(function (resposta) {
            if (resposta.ok) {
                resposta.json().then(vetorMusica => {
                    musicas = vetorMusica;
                    if (criador == id) {
                        for (var contador = 0; contador < vetorMusica.length; contador++) {
                            document.getElementById("musicasPlaylist").innerHTML += `
                        <a class="musicas" id=${contador} onclick="dadosMusica(this.id)">
                    <span id="nomeMusica"class="txtTexto">${vetorMusica[contador].nome}</span>
                    <span id="nomeArtista"class="txtTexto">${vetorMusica[contador].artista}</span>
                    <span id="generoMusica"class="txtTexto">${vetorMusica[contador].genero}</span>
                    <span id="duracaoMusica"class="txtTexto">${vetorMusica[contador].duracao}</span>
                    <iconify-icon icon="mdi:trash-can" class="imgIcons branco" id=${vetorMusica[contador].idMusica} onclick="deletarMusica(this.id)"></iconify-icon>
                </a>`
                        }
                    }
                    else {
                        for (var contador = 0; contador < vetorMusica.length; contador++) {
                            document.getElementById("musicasPlaylist").innerHTML += `
                        <a class="musicas" id=${contador} onclick="dadosMusica(this.id)">
                    <span id="nomeMusica"class="txtTexto">${vetorMusica[contador].nome}</span>
                    <span id="nomeArtista"class="txtTexto">${vetorMusica[contador].artista}</span>
                    <span id="generoMusica"class="txtTexto">${vetorMusica[contador].genero}</span>
                    <span id="duracaoMusica"class="txtTexto">${vetorMusica[contador].duracao}</span>
                    </a>`
                        }
                    }
                }
                );

            } else {

                console.log("Houve um erro ao pegar as musicas");

                resposta.text().then(texto => {
                    console.error(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })
    }
    else {
        Swal.fire({
            title: 'Você precisa estar logado para acessar as playlists',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Voltar',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = "login.html";
            }
            else {
                window.location = "login.html";
            }
        })
    }


}

function dadosMusica(clicked_id) {
    const contador = clicked_id
    document.getElementById("musica").innerHTML = musicas[contador].nome
    document.getElementById("artista").innerHTML = musicas[contador].artista
    document.getElementById("album").innerHTML = musicas[contador].album
    
}

function deletarMusica(clicked_id) {
    const contador = clicked_id
    console.log(contador)
    Swal.fire({
        title: 'Você realmente deseja deletar a musica?',
        icon: 'warning',
        showDenyButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim',
        denyButtonText: `Cancelar`,
    }).then((result) => {
        if (result.isConfirmed) {
            if (id != 0) {
                fetch("/musica/deletarMusica", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        idPlaylistServer: idPlaylist,
                        idMusicaServer: contador
                    })
                }).then(function (resposta) {
                    if (resposta.ok) {
                        window.location.reload(false);

                    } else {

                        console.log("Houve um erro ao pegar as musicas");

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

function adicionarMusica() {
    Swal.fire({
        title: 'Adicione uma musica ',
        html: `<input type="text" id="nome" class="swal2-input" placeholder="nome">
                <input type="text" id="genero" class="swal2-input" placeholder="genero">
                <input type="text" id="artista" class="swal2-input" placeholder="artista">
                <input type="text" id="album" class="swal2-input" placeholder="album">
                <input type="time" id="duracao" class="swal2-input" placeholder="duracao">`,

        confirmButtonText: 'Adicionar',
        focusConfirm: false,
        preConfirm: () => {
            const nome = Swal.getPopup().querySelector('#nome').value
            const genero = Swal.getPopup().querySelector('#genero').value
            const artista = Swal.getPopup().querySelector('#artista').value
            const album = Swal.getPopup().querySelector('#album').value
            const duracao = Swal.getPopup().querySelector('#duracao').value
            if (!nome || !genero || !artista || !album || !duracao) {
                Swal.showValidationMessage(`Preencha todos os campos`)
            }
            return { nome: nome, genero: genero, artista: artista, album: album, duracao: duracao  }
        }
    }).then((result) => {

        fetch("/musica/adicionarMusica", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idPlaylistServer: idPlaylist,
                nomeMusServer: result.value.nome,
                generoMusServer: result.value.genero,
                artistaMusServer: result.value.artista,
                albumMusServer: result.value.album,
                duracaoMusServer: result.value.duracao,
            })
        }).then(function (resposta) {
            if (resposta.ok) {
                window.location.reload(false);

            } else {

                console.log("Houve um erro ao pegar as musicas");

                resposta.text().then(texto => {
                    console.error(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })
        

    })
}