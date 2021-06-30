const express = require("express"); // import express package.
var app = express (); // initialized with express.
var bodyParser = require("body-parser");
//importando modulo
const listaDao = require("./src/models/listaDAO");
const { request } = require("express");
//iniciando express
var app = express();
//configurar metpdp para ler 'body' requests
app.use(bodyParser.json());
// criar rotas aqui
app.post("/teste", function(request, response){
    console.log("Rota /teste acessada com sucesso!");
    console.log(request.body);
});

app.listen(8080, function(){
    console.log("Server on na porta: " + 8080);
});
