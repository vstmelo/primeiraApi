// function ListaDAO(){
//     this.listas = function (nome){
//         // Gerar ID.
//         var novoID = "lista-" + Object.keys(this.listas).length;
//         // criando objeto da lista
//         var novaLista = {
//             id:novoID,
//             nome:nome,
//             tarefas: [],
//             numeroDeTarefas: 0
//         };
//         // Add new list to lists
//         this.listas[novoID] = novaLista;
        
//         return {
//             sucess: true,
//             message: "Lista \'" +nome + "\'criada."
//         };
    
//     };
//     this.renomearLista = function(listaID, novoNome){
//         // Vê se a lista existe
//         if(this.listas.hasOwnProprety(listaID)){
//             // poe nome noovo
//             this.listas[listaId].nome = novoNome;
//             console.log();
//             return {
//                 sucess: true,
//                 message: "Lista renomeada para \'" + novoNome + "\'"
//             };
//         }
//         else{
//             return {
//                 sucess: false,
//                 message: "Lista nao pode ser encontrada"
//         };
//     }
//     };
//     //retornas as listas existentes
//     this.getListas = function (){
//         return this.listas;
//     };

//     this.novaTarefa = function(descricao, listaID){
//         // id da tarefa
//         var idTarefa = "tarefa-" + this.listas[listaID].numeroDeTarefas;
//         // objeto tarefa
//         var tarefa = {
//             id: idTarefa,
//             descricao: descricao,
//             completa: false
//         };
//         // add tarefas na lista de tarefa
//         this.listas[listaID].push(tarefa);
//         this.listas[listaID].numeroDeTarefas += 1;
//         return{
//             sucess: true,
//             message: "Tarefa adicionada na lista" + this.listas[listaID].nome
//         };
//     };
//     this.toggleTarefa = function(listaID, tarefaID){
//         for (var i = 0; i < this.listas[listaID].tarefas[i].length; i++){
//             // troca o valor da propriedade
//             if(listas[listaID].tarefas[i].id === tarefaID){
//                 // troca o valor da propriedade 'completa
//                 this.listas[listaId].tarefas[i].completa
//                 = !this.listas[listaId].tarefas[i].completa;
//                 return{
//                     sucess: true,
//                     message: "Tarefa \n" + tarefaId + "\':"
//                     + this.listas[listaID].tarefas[i].completa
//                 };
//             }
//         }
//         return{
//             sucess: false, message: "Tarefa \n'"+trarefaId + "\' não encontrada"
//         };
//     };
//     this.apagarTarefa = function(listaId, tarefaId){
//         // Percorre as tarefas da lista
//         for(var i = 0; i < this.listas[listaId].tarefas.length; i++){
//             if(this.listas[listaId].tarefas[i].id === tarefaId){
//                 //apaga a tarefa no array de tarefas da lista
//                 this.listas[listaId].tarefas.splice(i,1);
//                 console.log("ListaDAO: Tarefa \'%s' apagada com sucesso.", tarefaId);
//                 break;
//             }
//         }
//     };
//     this.getTarefas = function(listaID){
//         return this.listas[listaId].tarefas;
//     };

// }
// export default new ListaDAO();