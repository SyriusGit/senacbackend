function verifyAnagrams(word: string): number {
	let numberLetters: number = word.length;
	let fatorial = calcularFatorial(numberLetters);
	return fatorial;
}
function calcularFatorial(n: number): number {
	if (n === 0 || n === 1) {
	  return 1;
	}
	for (let i = 2; i <= n; i++) {    //Para i = 2 (ponto de partida da fatoração), 
	n *= i;					 //enquanto i for menor ou igual a n (número de letras),
	}								//faça: i = i + i, onde o resultado de i será multiplicado por ele mesmo.
	return n;
  }
  const palavra = "coisa";
  const quantidadeAnagramas = verifyAnagrams(palavra);
  console.log(`A palavra '${palavra}' possui ${quantidadeAnagramas} anagramas.`);