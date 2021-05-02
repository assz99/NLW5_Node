import express, { request, response } from "express";

const app = express();

app.get("/", (request,response)=> {
    return response.send("Salve");
});

app.post("/users", (request,response)=>{
    return response.send("Usuario salvo com sucesso!");
});

app.listen(3333, () => console.log("Servidor rodando na porta 3333"));