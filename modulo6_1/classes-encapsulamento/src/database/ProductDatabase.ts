import { Product } from "../models/Product";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
    static TABLE_PRODUCTS = "Labe_Products"

    constructor(){
        super()
    }

    public async createProduct(product: Product){
        await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCTS).insert({
            id: product.getId(),
            name: product.getName(),
            price: product.getPrice()
        })
    }

    public async getProducts(){
        await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCTS).select()
    }
}