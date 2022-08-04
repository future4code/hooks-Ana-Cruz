/* 
EXERCÍCIO 1
a) Matheus Nachtergaele

Virginia Cavendish

canal: Globo
horario: 14h

EXERCÍCIO 2
a) idade: 3
nome: Juca
raca: SRD

idade: 3
nome: Juba
raca: SRD

idade: 3
nome: Jubo
raca: SRD

b) Ela copia todas as propiedades do objeto em questão para esse novo objeto

EXERCÍCIO 3
a) false

undefined

b) A função ao chamar a propriedade "altura" do objeto pessoa retorna indefinido, pois não existe essa propriedade criada no objeto.
*/


// EXERCÍCIO 1
const pessoa = {
    nome: "Ana Lívia",
    apelidos: ["Livinha", "Aninha", "Lívia"]
}

function nomeApelido(objeto) {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`);
}
nomeApelido(pessoa);

const novaPessoa = {
    ...pessoa,
    apelidos: ["Lila", "Ana", "Xoxo"]
}
nomeApelido(novaPessoa);
 */


// EXERCÍCIO 2
const pessoa1 = {
    nome: "Allana",
    idade: 26,
    profissao: "Assistente pessoal"
}

const pessoa2 = {
    nome: "Cristiano",
    idade: 60,
    profissao: "Aposentado"
}

function retornaArray(objeto) {
    const array = [
        objeto.nome,
        objeto.nome.length,
        objeto.idade,
        objeto.profissao,
        objeto.profissao.length
    ];
    return array;
}
console.log("Pessoa 1: ", retornaArray(pessoa1));
console.log("Pessoa 2: ", retornaArray(pessoa2));



// EXERCÍCIO 3
const carrinho = []; // a)

// b)
const frutas = {
    nome: "Banana",
    disponibilidade: true
}

const frutas1 = {
    nome: "Manga",
    disponibilidade: true
}

const frutas2 = {
    nome: "Abacaxi",
    disponibilidade: true
}

// c)
function encherCarrinho(objeto) {
    carrinho.push(objeto);
}

encherCarrinho(frutas);
encherCarrinho(frutas1);
encherCarrinho(frutas2);

// d)
console.log("Carrinho: ", carrinho);



// DESAFIO 1
function imprimirUsuario() {
    const nome = prompt("Digite seu nome: ");
    const idade = Number(prompt("Digite sua idade: "));
    const profissao = prompt("Digite sua profissão: ");

    const usuarioObj = {
        nome: nome,
        idade: idade,
        profissao: profissao
    }
    console.log(usuarioObj, "\nTipo: ",  typeof usuarioObj);

}

imprimirUsuario();
 

/* 
//DESAFIO 2
function retornaFilmes(obj1, obj2) {
    console.log(``)
}
 */