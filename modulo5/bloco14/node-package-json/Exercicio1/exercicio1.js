//a) pelo comando process.argv[indice]

//b)
const nome = process.argv[2]
const idade = Number(process.argv[3])

if(process.argv[2] && process.argv[3]){
console.log(`Olá, ${nome}! Você tem ${idade} anos.`)
//c)
console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`)
} else {
    console.log("Preciso de 2 parametros, por favor passe seu Nome e dua idade consecutivos!")
}
