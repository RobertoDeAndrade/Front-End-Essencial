// Cria um elemento e insere no <body>;
const titulo = document.createElement("h1");
titulo.innerText = "Avançando com JavaScript";
// document.body.appendChild(titulo);

// Insere dentro de um outro elemento;
const container = document.querySelector("#container");
// container.appendChild(titulo);

// If e Ternário
const idade = 18;

if(idade >= 18) {
    // alert("Maior de idade");
} else {
    // alert("Menor de idade");
}

// Operador ternário
idade >= 18 ? console.log("Maior de idade") : console.log("Menor de idade");

// É utilizado quando não temos valores exatos. Ex: menu.
switch (idade) {
    case 18:
        console.log("Tem 18 anos");
        break;
    
    case 30:
        console.log("Tem 30 anos");
        break;

    default:
        console.log("Caso não seja nenhuma das opções anteriores");
        break;
}

// Aspas simples ou duplas
const nome = 'Roberto';
const sobrenome = "Andrade";
const frase = "Olá, " + nome + " " + sobrenome + "!";
// Template String
const frase2 = nomeCompleto = `Olá, ${nome} ${sobrenome}!`;

console.log(frase);
console.log(frase2);

// Estruturas de repetição - for, while, do while
for (let index = 0; index < 10; index++) {
    console.log(index);
}

while(idade != 18) {
    console.log("Idade diferente de 18");
}

do {
    console.log("Vai executar pelo menos uma vez");
} while (idade != 18);

// Consulta do Tipo inferido pelo JS  
let soma = 10 + 20;
console.log(typeof soma);
soma = '10' + 20;
console.log(typeof soma);

// Funções com Function e com Arrow Function

function minhaFunction1() {
    console.log("Minha função!");
}
minhaFunction1();

function minhaFunction2(nome, idade) {
    console.log(`Olá ${nome}, você tem ${idade} anos.`);
}
minhaFunction2("Roberto", 27);

function somaDoisNumeros(num1, num2) {
    return num1 + num2;
}

const result = somaDoisNumeros(10, 20);
console.log("Resultado: " + result);

// Arrow Function () => {}
const multiplica = (num1, num2) => {
    // Lógicas para a função - Cálculos de equação
    return num1 * num2
}
const multiplica2 = (num1, num2) => (
     num1 * num2
)
const multiplica3 = (num1, num2) => num1 * num2;

console.log(multiplica(2, 5));
console.log(multiplica2(2, 5));
console.log(multiplica3(2, 5));

// Array[]
const frutas = ["Banana", "Maçã", "Goiaba"]
console.log(frutas)

// Tamanho do Array
console.log("Tamanho do Array: " + frutas.length)

const arrayMisto = [123, "String", {}, undefined, null, true];
console.log(arrayMisto);

// Substituição de valor
arrayMisto[0] = "Outra coisa";
console.log(arrayMisto)

// Inserir a última posição
frutas.push("Laranja");
console.log(frutas);

// Remover da última posição
frutas.pop();
console.log(frutas);

// Remover o primeiro elemento
frutas.shift();
console.log(frutas);

// Objetos - chave: valor

const user = {
    nome: "Roberto",
    idade: 27,
    frutasPreferidas: ["Banana", "Maçã", "Goiaba"],
    temHabilitacao: true,
}

console.log(user);

// Acessar informações no objeto
console.log(user.nome);
console.log(user.idade);
console.log(user.frutasPreferidas[0]);

// Acessando a última posição
console.log(user.frutasPreferidas[user.frutasPreferidas.length - 1])

const users = [
    {
        nome: "Roberto",
        idade: 27,
        frutasPreferidas: ["Banana", "Maçã", "Goiaba"],
        temHabilitacao: true,
    },

    {
        nome: "Pedro",
        idade: 21,
        frutasPreferidas: ["Banana", "Maçã", "Goiaba"],
        temHabilitacao: false,
    },

    {
        nome: "João",
        idade: 29,
        frutasPreferidas: ["Banana", "Maçã", "Goiaba"],
        temHabilitacao: true,
    }
]

console.log(users);

// Nome na posição 
console.log(users[0].nome);

// Primeira fruta preferida do user [1]
console.log(users[1].frutasPreferidas[0]);


// Crie um array de objetos para uma lista de contatos
// Cada contato terá "NOME", "CELULAR", "E-mail", "DATA DE NASCIMENTO"
// Criar 3 contatos diferentes

const contatos = [
    {
        nome: "Roberto de Andrade",
        celular: "(21)99999-8888",
        email: "roberto@gmail.com",
        dataDeNascimento: "08/01/95",
    },

    {
        nome: "Aline da Silva",
        celular: "(22)98877-8855",
        email: "fulano@hotmail.com",
        dataDeNascimento: "01/08/99",
    },

    {
        nome: "Ciclano da Silva",
        celular: "(24)99999-0000",
        email: "ciclano@gmail.com",
        dataDeNascimento: "29/02/85",
    }
]

console.log(contatos);

// forEach - Similar ao for - Não retorna nada;
contatos.forEach((contato) => {
    console.log(contato.nome)
})

// Similar ao forEach, porém é possível retornar um elemento;
const contatosMap = contatos.map((contato) => {
    console.log(contato.email)
    return contato.nome
})

console.log("Array de nomes: ", contatosMap)

const numerosNaturais = [1,2,3,4,5,6,7,8,9,10]

// filter() filtra um array - Caso a condição seja falsa,
// o elemento não entra de novo no array
const numerosPares = numerosNaturais.filter(numero => numero % 2 === 0)

console.log(numerosPares)

const contatosComA = contatos.filter(contato => contato.nome[0] === "A" || contato.nome[0] === "a")

console.log(contatosComA)

//// Requisições -> Funções Assíncronas

// const url = "https://jsonplaceholder.typicode.com/users"

//// Async - Await
// const getData = async () => {
//     const response = await fetch(url);
//     const dados = await response.json();
    
//     console.log(dados);
// }
// getData();

// //Função normal Assíncrona
// async function assincrona () {
//     //códigos...
// }

//// .then()
// const getData2 = () => {
//     let dados;
//     fetch(url)
//     .then(response => response.json())
//     .then(resp => console.log(resp))
    
//     console.log(dados)
// }
// getData2();

// Fazer fetch de https://jsonplaceholder.typicode.com/todos
// Salvar no array tarefas
// Consolar o array

// Criar novo array com as tarefas do userId 1 - Utilizar filter
// Exibir no console

const loading = document.querySelector("#loading");
const todosContainer = document.querySelector("#todosContainer")
const getTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const tarefas = await response.json();
    loading.classList.add("hide")

    const tarefasUserId1 = tarefas.filter(tarefa => tarefa.userId === 1);
    console.log(tarefasUserId1);

    tarefasUserId1.forEach(tarefa => {
        const todoContainer = document.createElement("div");
        const titulo = document.createElement("h2");
        const completed = document.createElement("p");
        titulo.innerText = "Título: " + tarefa.title;
        completed.innerText = "Concluída: " + tarefa.completed;
        todoContainer.appendChild(titulo);
        todoContainer.appendChild(completed);
        
        todosContainer.appendChild(todoContainer);
    })

}
getTodos();

