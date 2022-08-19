import express, {Request, Response} from "express";
import cors from 'cors'
import { AddressInfo } from "net";
import { afazeres, Afazeres } from "./data";


const app = express();

app.use(express.json());
app.use(cors())

app.get('/ping', (req, res) => {
    res.send('pong! 🏓')
})


app.get('/todos', (req: Request, res: Response) => {
    const status: string | undefined = req.query.status?.toString()
    try{
        if (!status) {
            throw new Error("Campo obrigatório")
        } else{
            res.send(afazeres.filter(afazer => {
                return afazer.completed.toString() === status
            }))
        }
    } catch(error: any) {
        res.send(error.message)
    }
})

app.post('/create', (req: Request, res: Response) => {
    const newList: Afazeres = {
        userId: req.body.userId,
        id: Date.now(),
        title: req.body.title,
        completed: false
    }

    afazeres.push(newList)
    res.status(201).send(afazeres)
})

app.put('/edit/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const tarefa = afazeres.find((tarefa) => tarefa.id === id)
    try{
        if (!tarefa) {
            throw new Error("Tarefa não encontrada!")
        } else{
            let status = false
            const newList: any[] = afazeres.map((task) => {
                if(task.id === id) {
                    task.completed = !tarefa.completed
                    status = task.completed
                }
                return task
            })
            console.log(newList)
            res.send(status ? "Sua tarefa foi completada!" : "Sua tarefa ainda está pendente!")
        }
    } catch(error: any) {
        res.send(error.message)
    }
})

app.delete('/delete/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const tarefa = afazeres.find((tarefa) => tarefa.id === id)
    const tarefaIndex = afazeres.findIndex((tarefa) => tarefa.id === id)
    try{
        if (!tarefa) {
            throw new Error("Tarefa não encontrada!")
        } else{
            afazeres.splice(tarefaIndex, 1)
            res.send("Sua tarefa foi excluída!")
        }
    } catch(error: any) {
        res.send(error.message)
    }
})

app.get('/todos/:userId', (req: Request, res: Response) => {
    
    try{
        if (!status) {
            throw new Error("Campo obrigatório")
        } else{
            res.send(afazeres.filter(afazer => afazer.completed.toString() === status))
        }
    } catch(error: any) {
        res.send(error.message)
    }
})




const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;