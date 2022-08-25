import express, { Request, Response, Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { produtos, Produto } from "./data";
import { send } from "process";


const app: Express = express();
app.use(express.json());
app.use(cors());

//Ex 1
app.get('/teste', (req: Request, res: Response) => {
    res.status(201).send("A API está funcional!")
})

//Ex 3
app.post('/produtos/criar', (req: Request, res: Response) => {
    let statusCode = 400;
    try {
        if (req.body.name === null || req.body.price === null) {
            statusCode = 422
            throw new Error("Campo obrigatório!")
        } else {
            const newProduct: Produto = {
                id: String(Date.now()),
                name: req.body.name,
                price: req.body.price
            }
            produtos.push(newProduct)
            res.status(201).send(produtos)
        }
    } catch (error: any) {
        res.status(statusCode).send(error.message)
    }
})

//Ex 4
app.get('/produtos', (req: Request, res: Response) => {
    res.status(201).send(produtos)
})

//Ex 5
app.put('/produtos/editar-preco/:id', (req: Request, res: Response) => {
    const produtoId: string | undefined = req.params.id
    let statusCode = 400;
    try {
        if (produtoId === null) {
            statusCode = 400
            throw new Error("Campo id obrigatório!")
        } else if(produtos.find(item => item.id === produtoId)) {
            statusCode = 404
            throw new Error("Produto não encontrado")
        }else {
            const produtoNew: Produto | undefined = produtos.find(produto => {
                if(produto.id === produtoId){
                    produto.price = req.body.price
                    return produto
                }
            })
            const newID: string | undefined = produtoNew?.id
            const retirados: Produto[] = produtos.splice(Number(newID)+1, produtos.length-1)
            // produtos.push(produtoNew)
            

            res.status(201).send(produtoNew)
        }
    } catch (error: any) {
        res.status(statusCode).send(error.message)
    }
})




const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});