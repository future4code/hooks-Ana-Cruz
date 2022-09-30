import { Product } from "../models/Product";
import { BaseDatabase } from "./BaseDatabase";

export class PurchaseDatabase extends BaseDatabase {
    static TABLE_PURCHASES = "Labe_Purchases"

    constructor(){
        super()
    }

}