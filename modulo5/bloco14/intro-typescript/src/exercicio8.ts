const reverteString = (palavra: string): string => {
    const palavraReversa: string = palavra.split("").reverse().join("").toUpperCase()
    return palavraReversa
}

console.log(reverteString("Amor"))