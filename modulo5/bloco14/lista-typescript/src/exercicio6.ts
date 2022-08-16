type Cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const clientes: Cliente[] =
[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const filtraSaldoNegativo = (clientes: Cliente[]): any => {
    return clientes.map(item => {
        let somaDebitos: number = 0
        for(let i=0; i<item.debitos.length; i++){
            somaDebitos += item.debitos[i]
        }
        item.debitos = []
        item.saldoTotal -= somaDebitos
        return item
    }).filter(item => {
        return item.saldoTotal < 0
    })
}

console.log(filtraSaldoNegativo(clientes))