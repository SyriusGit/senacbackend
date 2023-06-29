"use strict";
var Genero;
(function (Genero) {
    Genero["ACAO"] = "A\u00E7\u00E3o";
    Genero["DRAMA"] = "Drama";
    Genero["COMEDIA"] = "Com\u00E9dia";
    Genero["ROMANCE"] = "Romance";
    Genero["TERROR"] = "Terror";
})(Genero || (Genero = {}));
function catalogarFilme(nome, ano, genero, pontuacao) {
    console.log(`Nome: ${nome}
      Ano de lançamento: ${ano}
      Gênero: ${genero}
      Pontuação: ${pontuacao || " "}`);
}
catalogarFilme("Kill Bill", 2004, Genero.ACAO, 9);
//# sourceMappingURL=index.js.map