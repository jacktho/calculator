import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Input } from './input';

@Injectable()
export class CalculateService {
  private tempInputs: Input[];
  constructor(private storageService: StorageService) { }

  calculate(forPercentage: boolean = false) {
    this.tempInputs = [];
    this.multiplyAndDivide(forPercentage);
    return this.additionAndSubtraction();
  }

  multiplyAndDivide(forPercentage: boolean = false) {
    let valuesWereUsed: boolean = false;
    this.storageService.inputs.forEach((input, index, inputs) => {
      if (valuesWereUsed) {
        valuesWereUsed = false;
        return;
      }

      const endOfInputs: boolean = index === inputs.length - 1;
      const isMultiplicationOrDivision: boolean = input.operator === 'multiplication'
        || input.operator === 'division';
      const valueIsPercentage: boolean = forPercentage && endOfInputs;

      if (!endOfInputs && isMultiplicationOrDivision) {
        const secondInput: Input = inputs[index + 1];
        const arithmeticResult: number = this.arithmetic(
          input.operator, input.value, secondInput.value
        );

        this.tempInputs.push({ value: arithmeticResult, operator: secondInput.operator });

        valuesWereUsed = true;
      } else if (!valueIsPercentage) {
        this.tempInputs.push(input);
      }
    });
  }

  additionAndSubtraction() {
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
