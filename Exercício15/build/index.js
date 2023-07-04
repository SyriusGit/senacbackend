"use strict";
function verificarRenovacaoCarteira(dataNascimento, dataEmissao) {
    const hoje = new Date();
    const dataNascimentoObj = new Date(dataNascimento);
    const dataEmissaoObj = new Date(dataEmissao);
    const idadeEmAnos = calcularIdade(dataNascimentoObj, hoje);
    const tempoDesdeEmissaoEmAnos = calcularTempoDesdeEmissao(dataEmissaoObj, hoje);
    if (idadeEmAnos <= 20 && tempoDesdeEmissaoEmAnos >= 5) {
        return true;
    }
    else if (idadeEmAnos > 20 && idadeEmAnos <= 50 && tempoDesdeEmissaoEmAnos >= 10) {
        return true;
    }
    else if (idadeEmAnos > 50 && tempoDesdeEmissaoEmAnos >= 15) {
        return true;
    }
    return false;
}
function calcularIdade(dataNascimento, dataAtual) {
    const anoNascimento = dataNascimento.getFullYear();
    const anoAtual = dataAtual.getFullYear();
    return anoAtual - anoNascimento;
}
function calcularTempoDesdeEmissao(dataEmissao, dataAtual) {
    const tempoEmMilissegundos = dataAtual.getTime() - dataEmissao.getTime();
    const tempoEmAnos = tempoEmMilissegundos / (1000 * 60 * 60 * 24 * 365.25);
    return Math.floor(tempoEmAnos);
}
const precisaRenovar = verificarRenovacaoCarteira("24/04/1993", "07/11/2015");
console.log(precisaRenovar);
//# sourceMappingURL=index.js.map