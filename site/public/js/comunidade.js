mostrarMaisLike()
mostrarMaisFav()
mostrarMaisDislike()
mostrarTodasPlays()


function mostrarMaisLike() {
    
        fetch("/comunidade/mostrarMaisLike", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
           
        }).then(function (resposta) {
            if (resposta.ok) {
                resposta.json().then(vetorComunidade => {
                    console.log(vetorComunidade)

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
                    console.log(vetorComunidade)

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
                    console.log(vetorComunidade)

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
                    console.log(vetorComunidade)

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