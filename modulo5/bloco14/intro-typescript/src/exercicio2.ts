function imprimeTresCoresFavoritas(cor1: string, cor2: string, cor3: string): string[] {
    const coresArray: string[] = []
    coresArray.push(cor1, cor2, cor3)
    return coresArray
 }

 console.log(imprimeTresCoresFavoritas("azul", "verde", "vermelho"))