import { Request, Response } from "express"
import { ProductDatabase } from "../database/ProductDatabase"

export const getProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const newProductDatabase = new ProductDatabase()
        const result = newProductDatabase.getProducts()
        res.status(200).send({ products: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}