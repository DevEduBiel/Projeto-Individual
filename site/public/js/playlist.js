id = localStorage.getItem('ID_USUARIO');
idPlaylist = localStorage.getItem('ID_PLAYLIST');
window.onload = function mostraMusica() {
    if (id != 0) {
        fetch("/playlist/mostraMusica", {
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
                    console.log(vetorMusica);


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