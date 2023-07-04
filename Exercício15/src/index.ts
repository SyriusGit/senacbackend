function verificarRenovacaoCarteira(dataNascimento: string, dataEmissao: string): boolean {
	const hoje: Date = new Date();
	const dataNascimentoObj: Date = new Date(dataNascimento);
	const dataEmissaoObj: Date = new Date(dataEmissao);
  
	const idadeEmAnos: number = calcularIdade(dataNascimentoObj, hoje);
	const tempoDesdeEmissaoEmAnos: number = calcularTempoDesdeEmissao(dataEmissaoObj, hoje);
  
	if (idadeEmAnos <= 20 && tempoDesdeEmissaoEmAnos >= 5) {
	  return true;
	} else if (idadeEmAnos > 20 && idadeEmAnos <= 50 && tempoDesdeEmissaoEmAnos >= 10) {
	  return true;
	} else if (idadeEmAnos > 50 && tempoDesdeEmissaoEmAnos >= 15) {
	  return true;
	}
  
	return false;
  }
  
  function calcularIdade(dataNascimento: Date, dataAtual: Date): number {
	const anoNascimento: number = dataNascimento.getFullYear();
	const anoAtual: number = dataAtual.getFullYear();
  
	return anoAtual - anoNascimento;
  }
  
  function calcularTempoDesdeEmissao(dataEmissao: Date, dataAtual: Date): number {
	const tempoEmMilissegundos: number = dataAtual.getTime() - dataEmissao.getTime();
	const tempoEmAnos: number = tempoEmMilissegundos / (1000 * 60 * 60 * 24 * 365.25);
  
	return Math.floor(tempoEmAnos);
  }
  const precisaRenovar: boolean = verificarRenovacaoCarteira("24/04/1993", "07/11/2015");
  console.log(precisaRenovar);