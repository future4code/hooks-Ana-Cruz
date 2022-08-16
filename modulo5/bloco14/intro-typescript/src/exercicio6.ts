function comparaNumeros(a: number, b: number): void {
    let maiorNumero: number
    if (a > b) {
        maiorNumero = a;
      } else {
        maiorNumero = b;
      }
    console.log(`soma: ${a+b}`, `\nsubtrai: ${a-b}`, `\nmultiplica: ${a*b}`, `\nmaior numero: ${maiorNumero}`)
}

comparaNumeros(10, 2)