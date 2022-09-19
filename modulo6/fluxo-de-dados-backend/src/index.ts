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
            throw new Error("Dados obrigatórios!")
        } else {
            if (typeof req.body.name !== 'string' || typeof req.body.price !== 'number') {
                statusCode = 422
                throw new Error("Digite um valor válido para este campo!")
            } 
            if (req.body.price < 0) {
                statusCode = 422
                throw new Error("Digite o preço com um valor válido")
            } {
                statusCode = 500
                throw new Error("Ocorreu um erro inesperado")
            }

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
    const produtoId = req.params.id
    const newPrice = req.body.price
    let statusCode = 400;

    try {
        if (!produtoId) {
            statusCode = 400
            throw new Error("Campo id obrigatório!")
        }

        const index: number = 0
        let novoProduto: Produto | undefined = produtos.find((produto, index) => {
            if (produto.id === produtoId) {
                index = index
                return { id: produto.id, name: produto.name, price: newPrice }
            }
        })

        if (!novoProduto) {
            statusCode = 404
            throw new Error("Produto não encontrado")
        }

        produtos.splice(index, 1, novoProduto)

        res.status(201).send(produtos)
    } catch (error: any) {
        res.status(statusCode).send(error.message)
    }
})

//Ex 6
app.delete('/produtos/delete/:id', (req: Request, res: Response) => {
    const produtoId = req.params.id
    let statusCode = 400;

    try {
        if (!produtoId) {
            statusCode = 400
            throw new Error("Campo id obrigatório!")
        }

        const index: number = produtos.findIndex(produto => produto.id === produtoId)

        if (index < 0) {
            statusCode = 404
            throw new Error("Produto não encontrado")
        }

        produtos.splice(index, 1)

        res.status(201).send(produtos)
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