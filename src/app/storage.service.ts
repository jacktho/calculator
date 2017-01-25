import { Injectable } from '@angular/core';
import { Input } from './input';

@Injectable()
export class StorageService {
  inputs: Input[] = [];
  solution: number = 0;
  decimalPlaceCount: number = 0;
  numberToAdd: number = 0;
  title: string = '';

  constructor() { }

  get endOfInputs() {
    return this.inputs[this.inputs.length - 1];
  }

  addNumber(value: number) {
    this.numberToAdd = value;
    this.clearInputsIfEqualsHasBeenPressed();

    const valueToAdd: number = this.findValueToAdd();
    const newInputIsNeeded: boolean = !this.endOfInputs || this.endOfInputs.operator ? true : false;

    if (newInputIsNeeded) {
      this.inputs.push({ value: valueToAdd });
    } else {
      this.endOfInputs.value = valueToAdd;
    }
  }

  clearInputsIfEqualsHasBeenPressed() {
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
    if (this.decimalPlaceCount > 13) { return startingNumber; }

    const decimalNumber: number = this.convertToDecimal(this.numberToAdd, this.decimalPlaceCount);

    this.decimalPlaceCount++;

    const addingResult: number = startingNumber + decimalNumber;
    const fixedValue = +addingResult.toFixed(10);

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
