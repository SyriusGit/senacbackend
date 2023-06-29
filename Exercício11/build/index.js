"use strict";
var setores;
(function (setores) {
    setores["FN"] = "financeiro";
    setores["VD"] = "vendas";
    setores["MK"] = "marketing";
})(setores || (setores = {}));
let colaboradores = [
    { nome: "Marcos", salário: 2500, setor: setores.MK, presencial: true },
    { nome: "Maria", salário: 1500, setor: setores.VD, presencial: false },
    { nome: "Salete", salário: 2200, setor: setores.FN, presencial: true },
    { nome: "João", salário: 2800, setor: setores.MK, presencial: false },
    { nome: "Josué", salário: 5500, setor: setores.FN, presencial: true },
    { nome: "Natalia", salário: 4700, setor: setores.VD, presencial: true },
    { nome: "Paola", salário: 3500, setor: setores.MK, presencial: true }
];
function dadoColaborador(colaboradores) {
    return colaboradores.filter(colaborador => colaborador.setor === setores.MK &&
        colaborador.presencial === true);
}
console.log(dadoColaborador(colaboradores));
//# sourceMappingURL=index.js.map