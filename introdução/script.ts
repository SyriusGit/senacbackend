//DECLARAÇÃO DE VARIÁVEIS

const company: string = "SENAC";
let age: number = 18;
let isCorrect: boolean = true;


//DECLARAÇÃO DE ARRAY  

const arr: Array<number> = [1, 2, 3, 4, 5, 6, 7];
const array: number[] = [1, 2, 3, 4, 5, 6, 7];
const person: {
    name: string,
    age: number
} = {
    name: "Senac",
    age: 30
}


//DECLARAÇÃO TIPO ANY

let result: any;
result = "result";
result = 1903;
result = true;


//DECLARAÇÃO DE FUNÇÃO TIPADA

function sum(n1: number, n2: number): number {
    return n1 + n2
}

function resultSum(n1: number, n2: number): string {
    let result = n1 + n2
    return `Resultado é ${result}`;
}


//DECLARAÇÃO DE FUNÇÃO VOID

function sayHello(name?: string): void {
    console.log("Hello, ", name || "world" );
}