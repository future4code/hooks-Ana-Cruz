import express, { Request, Response, Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users, User, UserType } from "./data";

const app: Express = express();
app.use(express.json());
app.use(cors());

//Ex1
app.get('/users/all', (req: Request, res: Response) => {
    let statusCode = 400;
    try {
        statusCode = 200
        res.status(statusCode).send(users)
    } catch (error: any) {
        res.status(statusCode).send(error.message)
    }
})

app.get('/users/type/:type', (req: Request, res: Response) => {
    const type: string = req.params.type.toLocaleUpperCase()
    let statusCode = 400;
    try {
        if (type === null) {
            statusCode = 404
            throw new Error("Parâmetro vazio")
        }

        if (typeof type !== "string") {
            statusCode = 422
            throw new Error("Parâmetro inválido")
        }

        if (type !== UserType.ADMIN && type !== UserType.NORMAL) {
            statusCode = 422
            throw new Error("Esse tipo não existe")
        }

        statusCode = 200
        res.status(statusCode).send(users.filter(user => user.type === type))

    } catch (error: any) {
        res.status(statusCode).send(error.message)
    }
})

app.get('/users/name/:name', (req: Request, res: Response) => {
    const name: string = req.params.name.toLocaleLowerCase()
    let statusCode = 400;
    try {
        if (!name) {
            statusCode = 404
            throw new Error("Parâmetro vazio")
        }

        if (typeof name !== "string") {
            statusCode = 404
            throw new Error("Parâmetro inválido")
        }
        const user: User | undefined = users.find(user => user.name === name)

        if (user === undefined) {
            statusCode = 404
            throw new Error("Usuário não encontrado")
        }

        statusCode = 200
        res.status(statusCode).send(user)

    } catch (error: any) {
        res.status(statusCode).send(error.message)
    }
})

app.post('/users/name/:name', (req: Request, res: Response) => {
    const name: string = req.params.name.toLocaleLowerCase()
    const email: string = req.params.email.toLocaleLowerCase()
    const type: string = req.params.type
    const age: number = Number(req.params.age)
    let statusCode = 400;
    try {
        if (!name || email || type || age) {
            statusCode = 422
            throw new Error("Campo obrigatório!")
        } else {
            const newUser: User = {
                id: Date.now(),
                name: name,
                email: email,
                type: type === "admin" ? UserType.ADMIN : UserType.NORMAL ,
                age: age
            }
            users.push(newUser)
            res.status(201).send(users)
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