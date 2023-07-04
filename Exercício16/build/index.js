"use strict";
function verifyAnagrams(word) {
    let numberLetters = word.length;
    let fatorial = calcularFatorial(numberLetters);
    return fatorial;
}
function calcularFatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    for (let i = 2; i <= n; i++) {
        n *= i;
    }
    return n;
}
const palavra = "coisa";
const quantidadeAnagramas = verifyAnagrams(palavra);
console.log(`A palavra '${palavra}' possui ${quantidadeAnagramas} anagramas.`);
//# sourceMappingURL=index.js.map