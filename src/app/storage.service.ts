import { Injectable } from '@angular/core';
import { Input } from './input';

@Injectable()
export class StorageService {
  inputs: Input[] = [];
  solution: number = 0;

  constructor() { }

  get endOfInputs() {
    return this.inputs[this.inputs.length - 1];
  }

  addNumber(value: number) {
    if (this.endOfInputs && !this.endOfInputs.operator) {
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

  addOperator(value: string) {
    if (!this.endOfInputs) { return; }

    this.endOfInputs.operator = value;
  }
}