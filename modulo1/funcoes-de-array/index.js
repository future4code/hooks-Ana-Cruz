/* 
EXERCÍCIO 1
a) Como a função map percorre cada indice, ele vai imprimir no console a cada indice que passar o item da quele indice, o próprio item e o array completo

EXERCÍCIO 2
a) vai imprimir um novo array apenas com os nomes do array original

EXERCÍCIO 3
a) Vai criar um novo array filtrando apenas quem não tem apelido de Chijo
*/

/* 
// EXERCÍCIO 1
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
// a)
const nomesPets = pets.map( (item) => {
    return item.nome
 })
console.log(nomesPets)
// b)
const petSalsicha = pets.filter( (item) => {
    return item.raca === "Salsicha"
 })
console.log(petSalsicha)
// c)
const petPoodle = pets.filter( (item) => {
     return item.raca === "Poodle"
 })

const mensagemPoodle = petPoodle.map( (item) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
 })
console.log(mensagemPoodle)
 */

/* 
// EXERCÍCIO 2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
// a)
const nomeProdutos = produtos.map( (item) => {
    return item.nome
})
console.log(nomeProdutos)
// b)
const descontoProdutos = produtos.map( (item, array) => {
    const precoDesconto = item.preco * (100-5)/100
    const novoArray = [item.nome, precoDesconto]
    return novoArray
})
console.log(descontoProdutos)
// c)
const bebidasProdutos = produtos.filter( (item) => {
    return item.categoria === "Bebidas"
})
console.log(bebidasProdutos)
// d)
const ypeProdutos = produtos.filter( (item) => {
    return item.nome.includes("Ypê")
})
console.log(ypeProdutos)
// e)
const mensagemYpe = ypeProdutos.map( (item) => {
    return `Compre ${item.nome} por R$ ${item.preco}`
})
console.log(mensagemYpe)
 */

/* //DESAFIO
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]


const nomesPokemons = pokemons.map( (item) => {
    return item.nome
})
console.log(nomesPokemons) */
