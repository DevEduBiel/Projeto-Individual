//Verificar se o email é válido
function validarEmail() {
  const email = document.getElementById("email");
  //Alerta
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true
  })

  
  //Verificar se o email está dentro do intervalo de 6 e 85
  if (email.value.length < 6 || email.value.length > 85) {
    Toast.fire({
      icon: 'error',
      title: 'O email tem que ser maior que 6 menor 85 caracteres'
    })
    return false;
  }
  //Verificar se o email não contem nenhum caracter especial que não é aceito
  else if (email.value.indexOf("!") >= 0 || email.value.indexOf("#") >= 0 || email.value.indexOf("$") >= 0 || email.value.indexOf("%") >= 0 || email.value.indexOf("&") >= 0 || email.value.indexOf("*") >= 0 || email.value.indexOf("(") >= 0 || email.value.indexOf(")") >= 0 || email.value.indexOf("-") >= 0 || email.value.indexOf("_") >= 0 || email.value.indexOf("=") >= 0 || email.value.indexOf("+") >= 0 || email.value.indexOf("'") >= 0 || email.value.indexOf("´") >= 0 || email.value.indexOf("`") >= 0 || email.value.indexOf("{") >= 0 || email.value.indexOf("[") >= 0 || email.value.indexOf("}") >= 0 || email.value.indexOf("]") >= 0 || email.value.indexOf("~") >= 0 || email.value.indexOf("^") >= 0 || email.value.indexOf("?") >= 0 || email.value.indexOf("/") >= 0 || email.value.indexOf(";") >= 0 || email.value.indexOf(":") >= 0 || email.value.indexOf(">") >= 0 || email.value.indexOf("<") >= 0 || email.value.indexOf(",") >= 0 || email.value.indexOf("|") >= 0 || email.value.indexOf('"') >= 0 || email.value.indexOf(" ") >= 0 || email.value.indexOf("¨") >= 0 || email.value.indexOf("ç") >= 0) {
    Toast.fire({
      icon: 'error',
      title: 'O email possui caracteres invalidos'
    })
    return false;
  }

  //Verificar se o dominio do email é válido
  else if (email.value.indexOf("@") == 0 || email.value.endsWith("@gmail.com") == false && email.value.endsWith("@sptech.school") == false && email.value.endsWith("@bandtec.com.br") == false && email.value.endsWith("@outlook.com") == false && email.value.endsWith("@outlook.com.br") == false && email.value.endsWith("@hotmail.com") == false && email.value.endsWith("@yahoo.com") == false
  ) {
    Toast.fire({
      icon: 'error',
      title: 'O email não é válido'
    })
    return false;
  }

  //Mostra na tela que o email é valido
  else {
    return true;
  }
}

//Verificar se a senha digitada é forte
function validarForcaSenha() {
  const password = document.getElementById("senha");
  //Alerta
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true
  })

  //Verificar se a senha possui mais de 7 caracters
  if (password.value.length <= 7) {
    Toast.fire({
      icon: 'error',
      title: 'A senha precisa ter mais de 7 caracteres'
    })
    return false;
  }

  else {
    return true;
  }
}

//Verificar se a senha digitada no repetir senha é igual a primeira senha digitada
function validarConfirmarSenha() {
  const senha = document.getElementById("senha");
  const confirmaSenha = document.getElementById("repete_senha");

  //Verifica se as senhas são diferentes
  if (senha.value != confirmaSenha.value) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-right',
      iconColor: 'white',
      customClass: {
        popup: 'colored-toast'
      },
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true
    })
    Toast.fire({
      icon: 'error',
      title: 'Sua senha são diferentes'
    })
    return false;
  }

  //Mostra na tela que as senhas são iguais
  else {
    return true;
  }
}

// Caixa checkbox - Mostrar a senha digitada
function mostrarSenha() {
  const mostrar1 = document.getElementById("senha");
  const mostrar2 = document.getElementById("repete_senha");

  // Se o botão for selecionado, ele mostrará a senha
  if (mostrar1.type == "password") {
    mostrar1.type = "text";
    mostrar2.type = "text";
  }

  // Se o botão for desselecionado, ele esconderá a senha
  else {
    mostrar1.type = "password";
    mostrar2.type = "password";
  }
}

// Botão continuar - Verificar se todos os campos foram preenchidos corretamente
function continuarLogin() {
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");
  const confirmaSenha = document.getElementById("repete_senha");

  //Verifica se o usuário preencheu todos os campos
  if (email.value == "" || senha.value == "" || confirmaSenha.value == "") {
    //Alerta
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-right',
      iconColor: 'white',
      customClass: {
        popup: 'colored-toast'
      },
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true
    })
    Toast.fire({
      icon: 'error',
      title: 'Os campos estão vazios, preencha TODOS corretamente '
    })
  }
  //Verifica se algum campo digitado é inválido
  else if (!validarEmail() || !validarForcaSenha() || !validarConfirmarSenha()) {
    
  }

  //Redireciona o cliente para a próxima página de cadastro
  else {
    localStorage.setItem('email', email.value);
    localStorage.setItem('senha', senha.value);
    window.location.href = "./informacoes.html";
  }
}


function verificarNome() {
  const nome = document.getElementById("nome");
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true
  })
  
  // Verifica se o nome digitado possui mais de 5 letras
  if (nome.value.length < 3 || nome.value.length > 45) {
    Toast.fire({
      icon: 'error',
      title: 'O nome não pode ter menos de 3 ou mais que 45 caracteres'
    })
    return false;
  }
  //Nome cadastrado
  else {
    return true;
  }
}

function verificarSobrenome() {
  const sobrenome = document.getElementById("sobrenome");
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true
  })

  // Verifica se o sobrenome digitado possui mais de 5 letras
if (sobrenome.value.length < 3 || sobrenome.value.length > 45) {
  Toast.fire({
    icon: 'error',
    title: 'O sobrenome não pode ter menos de 3 ou mais que 45 caracteres'
  })
    return false;
  }
  //Sobrenome cadastrado
  else {
    return true;
  }
}

function verificarIdade() {
  const idade = document.getElementById("idade");
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true
  })

  // Verifica se a idade e maior que 10 e menor que 120
  if (idade.value < 10 || idade.value > 120) {
    Toast.fire({
      icon: 'error',
      title: 'A idade não pode ser menor que 10 ou maior que 120'
    })
    return false;
  }
  //idade cadastrado
  else {
    return true;
  }
}

function verificarGenero() {
  const genero = document.getElementById("genero");

  //Verificar se o campo é nulo
  if (genero == "") {
    return false;
  }

  //genero cadastrado
  else {
    return true;
  }
}

function verificarTreino() {
  const treino = document.getElementById("treino");
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true
  })
  //Verificar qtd treino
  if (treino.value > 14 || treino.value < 0){
   Toast.fire({
     icon: 'error',
     title: 'Quantidade invalida de treino'
   })
    return false;
  }
  //treino cadastrado
  else {
    return true;
  }
}


function criarConta() {

  //Recupere o valor da nova input pelo nome do id
  // Agora vá para o método fetch logo abaixo

  const nome = document.getElementById("nome");
  const sobrenome = document.getElementById("sobrenome");
  const idade = document.getElementById("idade");
  const genero = document.getElementById("genero");
  const treino = document.getElementById("treino");

  if (nome.value == "" || sobrenome.value == "" || idade.value == "" || genero.value == "" || treino.value == "" ) {
    //Alerta
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-right',
      iconColor: 'white',
      customClass: {
        popup: 'colored-toast'
      },
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true
    })
    Toast.fire({
      icon: 'error',
      title: 'Os campos estão vazios, preencha TODOS corretamente '
    })
  }

  var emailVar = localStorage.email;
  var senhaVar = localStorage.senha;
  var nomeVar = nome.value;
  var sobrenomeVar = sobrenome.value;
  var idadeVar = idade.value;
  var generoVar = genero.value;
  var treinoVar = treino.value;

  

  if (!verificarNome() || !verificarSobrenome() || !verificarIdade() || !verificarGenero() || !verificarTreino()) {
    return false;
  }

  else {
    setInterval(5000)
  }

  // Enviando o valor da nova input
  fetch("/registro/cadastrar", {

    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js

      emailServer: emailVar,
      senhaServer: senhaVar,
      nomeServer: nomeVar,
      sobrenomeServer: sobrenomeVar,
      idadeServer: idadeVar,
      generoServer: generoVar,
      treinoServer: treinoVar,

    })
  }).then(function (resposta) {
    if (resposta.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Cadastro realizado com sucesso!!',
        showConfirmButton: false,
        timer: 2500
      })
      setTimeout(() => {
        window.location = "login.html";
      }, "2500")

    } else {
      Swal.fire({
        title: 'Ouve um erro ao cadastrar. Verifique se ste Email já está sendo cadastrado',
        icon: 'warning',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location = "cadastro.html";
        }
      })
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
  });

}