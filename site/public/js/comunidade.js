function mostrarMaisLike() {
    fetch("/comunidade/mostrarMaisLike", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }

    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(vetorComunidade => {
                for (var contador = 0; contador < vetorComunidade.length; contador++) {
                    document.getElementById("playLike").innerHTML +=
                        `<a class="blocoPlay" onClick="ativafuncao(this.id)" id= ${vetorComunidade[contador].idPlaylist}>
                        <span class="txtTexto rank">${contador + 1}-</span>
                        <div class="playlist">
                            <iconify-icon icon="mdi:like" class="imgIcons roxo"></iconify-icon>
                            <span class="txtSubTexto">${vetorComunidade[contador].qtdLike}</span>
                        </div>
                        <span class="txtSubTexto">${vetorComunidade[contador].nome}</span>
                    </a>`

                }

            }
            );

        } else {

            console.log("Houve um erro ao carregar comunidade");
            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })
}


function mostrarMaisDislike() {
    fetch("/comunidade/mostrarMaisDislike", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(vetorComunidade => {
                for (var contador = 0; contador < vetorComunidade.length; contador++) {
                    document.getElementById("playDislike").innerHTML +=
                        `<a class="blocoPlay" onClick="ativafuncao(this.id)" id= ${vetorComunidade[contador].idPlaylist}>
                        <span class="txtTexto rank">${contador + 1}-</span>
                        <div class="playlist">
                            <iconify-icon icon="mdi:dislike" class="imgIcons roxo"></iconify-icon>
                            <span class="txtSubTexto">${vetorComunidade[contador].qtdDislike}</span>
                        </div>
                        <span class="txtSubTexto">${vetorComunidade[contador].nome}</span>
                    </a>`
                }
            }
            );
        } else {
            console.log("Houve um erro ao carregar comunidade");
            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })
}

function mostrarMaisFav() {
    fetch("/comunidade/mostrarMaisFav", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(vetorComunidade => {
                for (var contador = 0; contador < vetorComunidade.length; contador++) {
                    document.getElementById("playFav").innerHTML +=
                        `<a class="blocoPlay" onClick="ativafuncao(this.id)" id= ${vetorComunidade[contador].idPlaylist}>
                        <span class="txtTexto rank">${contador + 1}-</span>
                        <div class="playlist">
                            <iconify-icon icon="mdi:heart-multiple" class="imgIcons roxo"></iconify-icon>
                            <span class="txtSubTexto">${vetorComunidade[contador].qtdFav}</span>
                        </div>
                        <span class="txtSubTexto">${vetorComunidade[contador].nome}</span>
                    </a>`
                }
            }
            );

        } else {
            console.log("Houve um erro ao carregar comunidade");
            resposta.text().then(texto => {
                console.error(texto);
            });
        }
    }).catch(function (erro) {
        console.log(erro);
    })
}

function mostrarTodasPlays() {
    fetch("/comunidade/mostrarTodasPlays", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(vetorComunidade => {
                for (var contador = 0; contador < vetorComunidade.length; contador++) {
                    document.getElementById("playTudo").innerHTML +=
                        `<a class="blocoPlay" onClick="ativafuncao(this.id)" id= ${vetorComunidade[contador].idPlaylist}>
                        <div class="playlist">
                            <iconify-icon icon="cil:featured-playlist" class="imgIcons roxo"></iconify-icon>
                        </div>
                        <span class="txtSubTexto">${vetorComunidade[contador].nome}</span>
                    </a>`
                }
            }
            );

        } else {
            console.log("Houve um erro ao carregar comunidade");
            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })
}

function ativafuncao(clicked_id) {
    localStorage.ID_PLAYLIST = clicked_id
    window.location = "playlist.html";
}

mostrarMaisLike()
mostrarMaisFav()
mostrarMaisDislike()
mostrarTodasPlays()
