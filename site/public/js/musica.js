id = localStorage.getItem('ID_USUARIO');
idPlaylist = localStorage.getItem('ID_PLAYLIST');
var musicas = []
window.onload = function mostrarMusica() {
    const playlists = JSON.parse(sessionStorage.getItem('PLAYLISTS'))
    document.getElementById("nomePlaylist").innerHTML = playlists[idPlaylist-1].nome
    
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
                console.log(resposta);
                resposta.json().then(vetorMusica => {
                   
                    musicas = vetorMusica;

                    for (var contador = 0; contador < vetorMusica.length; contador++) {
                        document.getElementById("musicasPlaylist").innerHTML += `
                        <a class="musicas" id=${vetorMusica[contador].idMusica} onclick="dadosMusica(this.id)">
                    <span id="nomeMusica"class="txtTexto">${vetorMusica[contador].nome}</span>
                    <span id="nomeArtista"class="txtTexto">${vetorMusica[contador].artista}</span>
                    <span id="generoMusica"class="txtTexto">${vetorMusica[contador].genero}</span>
                    <span id="duracaoMusica"class="txtTexto">${vetorMusica[contador].duracao}</span>
                </a>`
               // <iconify-icon icon="material-symbols:delete-forever" class="imgIconPeq branco" id=${vetorMusica[contador].idMusica} onclick="deletaMusica"></iconify-icon>
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


}

function dadosMusica(clicked_id) {
    const contador = clicked_id - 1
    document.getElementById("musica").innerHTML = musicas[contador].nome
    document.getElementById("artista").innerHTML = musicas[contador].artista
    document.getElementById("album").innerHTML = musicas[contador].album
}

function deletarMusica(clicked_id) {
    if (id != 0) {
        const contador = clicked_id - 1
        fetch("/musica/deletarMusica", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idServer: id,
                idPlaylistServer: idPlaylist,
                idMusica: contador
            })
        }).then(function (resposta) {
            if (resposta.ok) {
                console.log(resposta);
                console.log('musica deletada');

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