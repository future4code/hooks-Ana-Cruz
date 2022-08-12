type Produto = {
    nome: string,
    preço: number,
    classificacao: string
}

enum Roupas {
    VERAO = "Verão",
    INVERNO = "Inverno",
    BANHO = "Banho",
    INTIMAS = "Íntimas"
}

// const descontosBlackFriday = (produtos: Produto[]): Produto[] => {
//     return produtos.map(item => {
//         switch (item.classificacao) {
//             case Roupas.VERAO:
//                 item.preço -= item.preço * (5 / 100)
//                 break;
//             case Roupas.INVERNO:
//                 item.preço -= item.preço * (10 / 100)
//                 break;
//             case Roupas.BANHO:
//                 item.preço -= item.preço * (4 / 100)
//                 break;
//             case Roupas.INTIMAS:
//                 item.preço -= item.preço * (7 / 100)
//                 break;
//             default:
//                 break;
//         }
//     })
// }