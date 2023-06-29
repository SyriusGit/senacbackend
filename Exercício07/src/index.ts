function apresentation(name: string, dateBirth: string): string {
    let nameApresentation: string = name;
    let dateApresentation: string = dateBirth;
    let dateParce = [];
    dateParce = dateApresentation.split("/");
    const day: string = dateParce[0];
    const month: string = dateParce[1];
    const year: string = dateParce[2];
    let phrase: string =`Olá, me chamo ${name}, nasci no dia ${day} do mês ${month} do ano de ${year}`;
    return phrase;
}

console.log(apresentation("Henri", "07/05/2005"));

//APRESENTAÇÃO