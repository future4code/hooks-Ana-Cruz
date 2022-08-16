const meses: string[] = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
"Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

const transformString = (name: string, date: string): string => {
    return `Olá, me chamo ${name}, nasci no dia ${Number(date.slice(0,2))} 
    do mês ${meses[Number(date.slice(3,5))-1]} do ano ${Number(date.slice(-4))}`
}

console.log(transformString("Ana Lívia", "31/08/1991"))