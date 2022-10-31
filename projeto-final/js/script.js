
let users = [];

function switchTheme() {
    const botao = document.querySelector("#flexSwitchCheckDefault")
    

    if(botao.checked){
        document.body.style.backgroundColor = '#1a1a1a'
        document.body.style.color = '#fff'
    } else {
        document.body.style.backgroundColor = '#fff'
        document.body.style.color = '#000'
    }
}

function verificar(){
  
    const nome = document.querySelector("#nome");
    const email = document.querySelector("#email");
    const mensagem = document.querySelector("#mensagem");

    if(!nome.value || !email.value || !mensagem.value){
        alert("Canelada na trave!!! Preencha todos os campos!");
        return
    } 

    const user = {
        nome: nome.value,
        email: email.value,
        mensagem: mensagem.value
    }

    users.push(user)
    localStorage.setItem(user.email, JSON.stringify(user))

    // Fazer o reset nas caixas
    nome.value = ""
    email.value = ""
    mensagem.value = ""
}