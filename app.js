const express = require("express"); // import express package.
var app = express (); // initialized with express.
var bodyParser = require("body-parser");
//importando modulo
const listaDao = require("./src/models/listaDAO");
const { request, response } = require("express");
//iniciando express
var app = express();
//configurar metpdp para ler 'body' requests
app.use(bodyParser.json());
// criar rotas aqui
app.post("/teste", function(request, response){
    console.log("Rota /teste acessada com sucesso!");
    console.log(request.body);
});
app.post("\lista", function(request, response){
    // a propriedade do body do request
    var nome = request.body.nome;
    // cria uma nova lista
    var result= Lista.DAO.criarLista(nome);
    response.status(200);
    response.json(result);
    response.end();
});
app.put("/lista/:id_lista", function(request, response){
    // Pega o novo nome da propriedade do body request
    var novoNome = rquest.body.nome;
    // Pega o id da lista atraves da rota
    var idDaLista = request.params.id_lista;
    // Renomeia a lista
    var result = ListaDAO.renomearLista(idLista, novoNome);
    response.status(200);
    response.json(result);
    response.end();
});
app.delete("/lista/:id_lista", function(request, responde){
    // Pega o ID da lista a ser apagada
    var idDaLista = request.params.id_lista;
    // Apaga o id correspondente
    var result = ListaDAO.apagarLista(idDaLista);
    response.status(200);
    response.json(result);
    response.end();
});
app.get("/lista", function(request, response){
    response.status(200);
    response.json(ListaDAO.getListas());
    response.end();
});
app.post("/lista/id:_lista", function(request, response){
    // coleta dados da requisicao
    var idDaLista = request.params.id_lista;
    var descricaoDaTarefa = request.body.descricao;
    // cria nova lista
    var result = listaDAO.novaTarefa(descricaoDaTarefa, idDaLista);
    response.status(200);
    response.json(result);
    response.end();
});
// alterar status da tarefa
app.put("/lista/:id_lista/tarefa/:id_tarefa", function(request, response){
    // coleta info do request
    var idDaLista = request.params.id_lista;
    var idDaTarefa = request.params.id_tarefa;
    // Alterna o estado da tarefa
    var result = ListaDAO.toggleTarefa(idDaLista, idDaTarefa);
    response.status(200);
    response.json(result);
    response.end();
});
app.delete("/lista/:id_lista/tarfa/id:tarefa", function(request, response){
    // coleta dados do request
    var idDaLista = request.params.id_lista;
    var idDaTarefa = request.params.id_tarefa;
    // Apaga tarefa da lista
    var result = ListaDAO.apagarTarefa(idLista, idDaTarefa);
    response.status(200);
    response.json(result);
    response.end();
});
app.get("/tarefas/:id_lista/tarefa", function(request, response){
    var idDaLista = request.params.id_lista;
    response.status(200);
    response.json(ListaDAO.getTarefas(idDaLista));
    response.end();
});
app.listen(8080, function(){
    console.log("Server on na porta: " + 8080);
});
