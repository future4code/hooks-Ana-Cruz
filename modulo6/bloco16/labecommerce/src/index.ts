import express, { Request, Response } from "express";
import cors from "cors";
import { v4 as passwordGenerator } from 'uuid';
import connection from "./database/connection";

const app = express();

app.use(express.json());
app.use(cors());

//========================== 01 CRIAR USUÁRIO
app.post('/users', async (req: Request, res: Response) => {
  let statusCode = 400
  try {
    const id = passwordGenerator()
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    if (!name || !email || !password) {
      throw new Error("Campo obrigatório")
    }

    await connection.raw(`
    INSERT INTO labecommerce_users (id, name, email, password)
    VALUES ("${id}", "${name}", "${email}", "${password}");
    `)
    statusCode = 200
    res.status(statusCode).send(`Usário ${name} criado com sucesso!`)

  } catch (error: any) {
    res.status(statusCode).send(error.message)
  }
})
//========================== 02 BUSCAR TODOS OS USUÁRIOS
app.get('/users', async (req: Request, res: Response) => {
  let statusCode = 400
  try {
    const users = await connection.raw(`
      SELECT * FROM labecommerce_users;
    `)
    statusCode = 200
    res.status(statusCode).send(users[0])

  } catch (error: any) {
    res.status(statusCode).send(error.message)
  }
})


app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});