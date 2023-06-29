/*criar uma função que receba o primeiro nome e o sobrenome,
o sobrenome pode ser nulo, exibir nome completo*/

function readName(fname: string, sname?: string): void {
    console.log(fname, sname || " ");
}
readName("Henri", "Santos");