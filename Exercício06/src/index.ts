function numbers(num1: number, num2: number): string {
    let sum: number = num1 + num2;
    let diference: number = num1 - num2;
    let multiplicador: number = num1 * num2;
    let divisão: number = num1 / num2;

    return `Numeros recebidos ${num1} e ${num2} 
    \nSoma: ${sum} 
    \nSubtração: ${diference} 
    \nMultiplicação: ${multiplicador} 
    \nDivisão: ${divisão}`;
}
console.log(numbers(600, 45));
