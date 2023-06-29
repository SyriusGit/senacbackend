"use strict";
function apresentation(name, dateBirth) {
    let nameApresentation = name;
    let dateApresentation = dateBirth;
    let dateParce = [];
    dateParce = dateApresentation.split("/");
    const day = dateParce[0];
    const month = dateParce[1];
    const year = dateParce[2];
    let phrase = `Olá, me chamo ${name}, nasci no dia ${day} do mês ${month} do ano de ${year}`;
    return phrase;
}
console.log(apresentation("Henri", "07/05/2005"));
//# sourceMappingURL=index.js.map