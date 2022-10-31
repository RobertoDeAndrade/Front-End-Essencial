//Imprime mensagens no console
console.log("Hello World!");

// Mostra uma janela de alerta com um botão de ok
// alert("Hello World!");

// Abre a caixa de diálogo que espera um texto como resposta
// const nome = prompt("Qual é o seu nome?");

// console.log("Olá, ", nome);

// Tipos de variáveis - const, let, var;
// const - É um valor constante que não muda;
// let - Valor variável mais utilizada;
// var - similar ao let, mas tem um problema de escopo;

const idade = 21;
let estadoCivil = "solteiro";

// Funções
function imprimeNoConsole(){
    console.log("Função imprime no console ativada com sucesso!");
}

// Chamando uma função
// imprimeNoConsole();

const user = {
    email: "joao@gmail.com",
    senha: "123"
}

// Função para Capturar os dados de login e senha
function login(){
    const email = document.querySelector("#email");
    const senha = document.querySelector("#senha");

    if(email.value == user.email || senha.value == user.senha){
        alert("Preencha todos os campos");
        return
    }

    // if(email.value == user.email && senha.value == user.senha) {
    //     alert("Senha correta");
    // } else {
    //     alert("Senha incorreta!");
    // }

    // document.querySelector("#email").value = ""
    // document.querySelector("#senha").value = ""

    email.value = ""
    senha.value = ""
}

function switchTheme() {
    const botao = document.querySelector("#flexSwitchCheckDefault")

    if(botao.checked){
        document.body.style.backgroundColor = '#000'
        document.body.style.color = '#fff'
    } else {
        document.body.style.backgroundColor = '#fff'
        document.body.style.color = '#000'
    }
}