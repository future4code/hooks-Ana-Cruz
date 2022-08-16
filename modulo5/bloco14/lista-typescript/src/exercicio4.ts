enum Setores {
    FINANCEIROO= "financeiro",
    MKT = "marketing",
    VENDAS = "vendas"
}

type Colaborador = {
    nome: string,
    salario: number,
    setor: Setores,
    presencial: boolean
}

const colaboradores: Colaborador[] =
[
	{ nome: "Marcos", salario: 2500, setor: Setores.MKT, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: Setores.VENDAS, presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: Setores.FINANCEIROO, presencial: true},
	{ nome: "João" ,salario: 2800, setor: Setores.MKT, presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: Setores.FINANCEIROO, presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: Setores.VENDAS, presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: Setores.MKT, presencial: true }
]

const separaSetorMktPresencial = (colaboradores: Colaborador[]): Colaborador[] => {
    return colaboradores.filter(item => {
        return item.setor === Setores.MKT && item.presencial
    })
}

console.log(separaSetorMktPresencial(colaboradores))