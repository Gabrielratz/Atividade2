var http = require('http');

const express = require ("express")
const app = express();

http.createServer().listen(8081);

console.log("O Servidor está funcionando")

app.get("/programação", function(req, resp){
    resp.sendFile(__dirname+ "quiz2.html")
})

app.get("/dados", function(req, resp){
    resp.sendFile(__dirname+ "quiz3.html")
})

