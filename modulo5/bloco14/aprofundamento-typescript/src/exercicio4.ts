//a) 
type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//b)
// Adicionaria na aba scripts do package.json uma linha com o seguinte comando
// "ex4": "tsc ./exercicio.ts && node ./exercicio4.js"

//c)
// Para realizar a trascrição de um arquivo na pasta src é necessário mudar o local
// "ex4": "tsc ./src/exercicio.ts && node ./exercicio4.js"

//d)
//Ajustando as configurações do tsconfig.json