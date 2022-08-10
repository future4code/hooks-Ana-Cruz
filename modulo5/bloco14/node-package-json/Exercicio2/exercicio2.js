
if(process.argv[3] && process.argv[4]){
switch (process.argv[2]) {
    case "add":
        console.log(`${Number(process.argv[3]) + Number(process.argv[4])}`)
        break;
    case "sub":
        console.log(`${Number(process.argv[3]) - Number(process.argv[4])}`)
        break;
    case "mult":
        console.log(`${Number(process.argv[3]) * Number(process.argv[4])}`)
        break;
    case "div":
        console.log(`${Number(process.argv[3]) / Number(process.argv[4])}`)
        break;

    default:
        console.log("Escolha entre as opções add/sub/mult/div e passe 2 valores.\n")
        console.log("Exemplo: sub 3 2 (Estará reealizando 3 * 2)")
        break;
}
} else {
    console.log("%c Você está passando apenas 1 valor, por favor passe 2 valores!", 
    "color: #00FA9A")
    console.log("Exemplo: sub 3 2 (Estará reealizando 3 - 2)")
}