const converteDnaEmRna = (dna: string): string => {
    const dnaArray: string[] = dna.split('')
    const rnaArray: string[] = dnaArray.map(item => {
        switch(item){
            case "A":
                return "U"
                break;
            case "T":
                return "A"
                break;
            case "C":
                return  "G"
                break;
            case "G":
                return "C"
                break;
            default:
                return " "
                break
        }
    })
    const rna: string = rnaArray.join('')
    return rna
}

console.log(converteDnaEmRna("CGA CGC GTA"))