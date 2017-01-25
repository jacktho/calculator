import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Input } from './input';

@Injectable()
export class CalculateService {
  private tempInputs: Input[];
  constructor(private storageService: StorageService) { }

  calculate() {
    if (this.storageService.inputs.length === 1) { return this.storageService.endOfInputs.value; }

    this.tempInputs = [];
    this.multiplyAndDivide();
    return this.additionAndSubtraction();
  }

  multiplyAndDivide() {
    let valuesWereUsed: boolean = false;
    this.storageService.inputs.forEach((input, index, inputs) => {
      // Example: 1*2*3 .. first iteration.. 1*2... so skip 2 on second iteration
      if (valuesWereUsed) {
        valuesWereUsed = false;
        return;
      }

      const endOfInputs: boolean = index === inputs.length - 1;
      const isMultiplicationOrDivision: boolean = input.operator === '*' || input.operator === '/';

      if (!endOfInputs && isMultiplicationOrDivision) {
        const secondInput: Input = inputs[index + 1];
        const arithmeticResult: number = this.arithmetic(
          input.operator, input.value, secondInput.value
        );

        this.tempInputs.push({ value: arithmeticResult, operator: secondInput.operator });

        valuesWereUsed = true;
      } else { // push for additionAndSubtraction
        this.tempInputs.push(input);
      }
    });
  }

  additionAndSubtraction() {
    if (!this.tempInputs.length) { return; }
    const finalResult: Input = this.tempInputs.reduce(
      (previous: Input, current: Input) => {
        const result: number = this.arithmetic(previous.operator, previous.value, current.value);
        return { value: result, operator: current.operator };
      }
    );

    return +finalResult.value.toFixed(13);
  }

  arithmetic(operator, firstValue, secondValue) {
    switch (operator) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return firstValue / secondValue;
      default:
        break;
    }
  }
}
