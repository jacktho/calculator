import { Injectable } from '@angular/core';
import { Input } from './input';

@Injectable()
export class StorageService {
  inputs: Input[] = [];
  solution: number = 0;
  decimalPlaceCount: number = 0;
  numberToAdd: number = 0;

  constructor() { }

  get endOfInputs() {
    return this.inputs[this.inputs.length - 1];
  }

  addNumber(value: number) {
    this.numberToAdd = value;
    this.checkForEquals();

    const valueToAdd: number = this.findValueToAdd();
    const newInputIsNeeded = !this.endOfInputs || this.endOfInputs.operator;

    if (newInputIsNeeded) {
      this.inputs.push({ value: valueToAdd });
    } else {
      this.endOfInputs.value = valueToAdd;
    }
  }

  checkForEquals() {
    if (!this.inputs.length) { return; }

    if (this.endOfInputs.operator === '=') {
      this.clearInputs();
    }
  }

  findValueToAdd() {
    if (!this.inputs.length && !this.decimalPlaceCount) { return this.numberToAdd; }

    const startingNumber = !this.endOfInputs || this.endOfInputs.operator
      ? 0 : this.endOfInputs.value;

    let valueToReturn: number = 0;
    if (this.decimalPlaceCount) {
      valueToReturn = this.addDecimalToValue(startingNumber);
    } else {
      valueToReturn = this.appendWholeNumberToValue(startingNumber);
    }

    return valueToReturn;
  }

  addDecimalToValue(startingNumber) {
    const decimalNumber: number = this.convertToDecimal(this.numberToAdd, this.decimalPlaceCount);

    this.decimalPlaceCount++;

    const addingResult: number = startingNumber + decimalNumber;
    const fixedValue = +addingResult.toFixed(10);

    // const fixedDecimal: number = +parseInt(resultSplit[1], 10).toFixed(10);
    // const finalString: string = resultSplit[0] + '.' + fixedDecimal.toString();
    // const fixedValue: number = Math.round(+finalString);

    return fixedValue;
  }

  appendWholeNumberToValue(startingNumber) {
    const originalNumberAsString = startingNumber.toString();

    return +originalNumberAsString.concat(this.numberToAdd.toString());
  }

  convertToDecimal(value, places) {
    let decimalString = '.';

    for (let index = 1; index < places; index++) {
      decimalString += '0';
    }

    decimalString += value;

    return +decimalString;
  }

  clearInputs() {
    this.inputs = [];
    this.solution = 0;
    // this.decimalPlaceCount = 0;
  }

  addOperator(value: string) {
    this.decimalPlaceCount = 0;

    if (!this.endOfInputs) { return; }

    this.endOfInputs.operator = value;
  }

  removeLastInput() {
    if (this.inputs.length <= 1) {
      this.clearInputs();
    } else {
      this.inputs.pop();
    }
  }
}
