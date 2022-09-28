// export type Product = {
//     id: string,
//     name: string,
//     price: number
// }

export class Product {
    private id: string
    private name: string
    private price: number

    constructor(id: string, name: string, price: number){
        this.id = id
        this.name = name
        this.price = price
    }

    getId(){
        return this.id
    }

    getName(){
        return this.name
    }

    getPrice(){
        return this.price
    }
}