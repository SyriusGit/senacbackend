function compTwoNumbers(num1: number, num2: number): number {
    let biggestNumber: number;
    let smallerNumber: number;
  
    if (num1 > num2) {
      biggestNumber = num1;
      smallerNumber = num2;
    } else {
      biggestNumber = num2;
      smallerNumber = num1;
    }
  
    const diference: number = biggestNumber - smallerNumber;
  
    return diference;
  }