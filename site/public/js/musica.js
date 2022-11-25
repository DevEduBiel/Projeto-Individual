id = localStorage.getItem('ID_USUARIO');
idPlaylist = localStorage.getItem('ID_PLAYLIST');
window.onload = function mostraMusica() {
    const playlists = localStorage.getItem('PLAYLISTS');
    document.getElementById("nomePlaylist").innerHTML = playlists[idPlaylist].nome
    if (id != 0) {
        fetch("/musica/mostraMusica", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idServer: id,
                idPlaylistServer: idPlaylist,
            })
        }).then(function (resposta) {
            if (resposta.ok) {
                console.log(resposta);
                resposta.json().then(vetorMusica => {
                    localStorage.MUSICAS = vetorMusica
                    
                    for (var contador = 0; contador < vetorMusica.length; contador++) {
                        document.getElementById("suaPlaylist").innerHTML += `
                        <div class="musicas" id=${vetorMusica[contador].idMusica} onclick="dadosMusica()">
                    <span id="nomeMusica"class="txtTexto">${vetorMusica[contador].nome}</span>
                    <span id="nomeArtista"class="txtTexto">${vetorMusica[contador].artista}</span>
                    <span id="generoMusica"class="txtTexto">${vetorMusica[contador].genero}</span>
                    <span id="duracaoMusica"class="txtTexto">${vetorMusica[contador].duracao}</span>
                    <iconify-icon icon="material-symbols:delete-forever" class="imgIconPeq branco" id=${vetorMusica[contador].idMusica} onclick="deletaMusica"></iconify-icon>
                </div>`   
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
    const musicas = localStorage.getItem('MUSICAS');
    document.getElementById("nomeMusica").innerHTML = musicas[clicked_id].nome
    document.getElementById("nomeArtista").innerHTML = musicas[clicked_id].artista
}

function deletarMusica() {
    if (id != 0) {
        fetch("/musica/deletarMusica", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idServer: id,
                idPlaylistServer: idPlaylist,
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