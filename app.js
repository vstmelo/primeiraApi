import express from "express"; // import express package.
var app = express (); // initialized with express.
var bodyParser = requiere("body-parser");
//importando modulo
import listaDAO from "./listaDAO";
//iniciando express
var app = express();
//configurar metpdp para ler 'body' requests
app.use(bodyParser.json());
// criar rotas aqui
app.get("/teste", function(requeste, response){
    console.log("Rota /teste acessada com sucesso!");
});

app.listen(8080);
