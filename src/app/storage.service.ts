import { Injectable } from '@angular/core';
import { Input } from './input';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class StorageService {
  inputs: Input[] = [];
  solution: number = 0;
  showEquation = new Subject();

  public decimal: string;
  public originalNumber: number;

  constructor() { }

  get endOfInputs() {
    return this.inputs[this.inputs.length - 1];
  }

  addNumber(value: number) {
    if (this.decimal !== undefined) {
      this.addValueToDecimal(value);
    } else if (this.endOfInputs && !this.endOfInputs.operator) {
      const valueAsString = this.endOfInputs.value.toString();
      this.endOfInputs.value = +valueAsString.concat(value.toString());
    } else if (this.endOfInputs && this.endOfInputs.operator === 'Enter') {
      this.clearInputs();
      this.inputs.push({ value });
    } else {
      this.inputs.push({ value });
    }
  }

  clearInputs() {
    this.inputs = [];
    this.solution = 0;
  }

  clearDecimal() {
    this.decimal = undefined;
    this.originalNumber = 0;
  }

  addOperator(value: string) {
    this.clearDecimal();
    if (!this.endOfInputs) { return; }

    this.endOfInputs.operator = value;
    this.showEquation.next();
  }

  addValueToDecimal(value) {
    this.decimal = this.decimal.concat(value.toString());
    this.endOfInputs.value = +this.originalNumber.toString().concat(this.decimal);
  }
}