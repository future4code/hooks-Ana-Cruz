export type Post = {
    id: number,
    title: string,
    body: string,
    userId: number
}

//Acredito ser melhor criar fora, pois 
export const postList: Post[] = [
    {
        userId: 1,
        id: 1,
        title: "Gatos",
        body: "Eles tem 7 vidas."
    },
    {
        userId: 1,
        id: 2,
        title: "Cachorros",
        body: "São o melhor amigo da mulher."
    },
    {
        userId: 1,
        id: 3,
        title: "Calopsita",
        body: "São dóceis e adoram cantar"
    },
    {
        userId: 2,
        id: 4,
        title: "Lingerie",
        body: "Conforto e beleza"
    },
    {
        userId: 2,
        id: 5,
        title: "Biquini",
        body: "Marquinha ou estilo?"
    },
    {
        userId: 2,
        id: 6,
        title: "Sandálias, saltos e sapatos",
        body: "Só dói no primeiro uso"
    },
    {
        userId: 3,
        id: 7,
        title: "Iphone",
        body: "A apple sempre um passo a frente"
    },
    {
        userId: 3,
        id: 8,
        title: "Samsung",
        body: "Tem melhorado"
    },
]