enum Genero {
    ACAO = "Ação",
    DRAMA = "Drama",
    COMEDIA = "Comédia",
    ROMANCE = "Romance",
    TERROR = "Terror"
}
  function catalogarFilme(nome: string, ano: number, genero: Genero, pontuacao?: number): any {
    console.log(
      `Nome: ${nome}
      Ano de lançamento: ${ano}
      Gênero: ${genero}
      Pontuação: ${pontuacao || " "}`
    )
  }
catalogarFilme("Kill Bill", 2004, Genero.ACAO, 9);