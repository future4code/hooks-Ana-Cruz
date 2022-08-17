import { userList } from './userList';
import { postList, Post } from './postList';

import express from "express";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from Express")
})

app.get("/users", (req, res) => {
    res.send(userList)
})

app.get("/posts", (req, res) => {
    res.send(postList)
})

app.get("/posts/:userId", (req, res) => {
    const userId = Number(req.params.userId)

    const postsById = postList.filter(post => {
        if(post.userId === userId){
            return post
        }
    })
    res.send(postsById)
})

app.delete("/posts/:userId/:postId", (req, res) => {
    const userId = Number(req.params.userId)
    const postId = Number(req.params.postId)

    const indexOfPost = postList.map((post, index) => {
        if(post.userId === userId && post.id === postId){
            return index
        }
    })
    postList.splice(Number(indexOfPost), 1)
    res.send(postList)
})

app.delete("/users/:userId", (req, res) => {
    const userId = Number(req.params.userId)

    const indexOfUser = userList.map((user, index) => {
        if(user.id === userId){
            return index
        }
    })
    const indexOfPost = postList.filter((post, index) => {
        return post.userId === userId
    })
    userList.splice(Number(indexOfUser), 1)
    console.log(indexOfPost)
    res.send(userList)
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;