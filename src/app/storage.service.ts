import { Injectable } from '@angular/core';
import { Input } from './input';

@Injectable()
export class StorageService {
  inputs: Input[] = [];

  constructor() { }

  get endOfInputs() {
    return this.inputs[this.inputs.length - 1];
  }
  set endOfInputs(boo) {
    console.log(boo)
  }

  addNumber(value: number) {
    if (this.endOfInputs && !this.endOfInputs.operator) {
      const valueAsString = this.endOfInputs.value.toString();
      this.endOfInputs.value = +valueAsString.concat(value.toString());
    } else {
      this.inputs.push({ value });
    }
  }

  addOperator(value: string) {
    if (!this.endOfInputs) { return; };

    this.endOfInputs.operator = value;
  }

  test() {
    console.log('The plumber left.');
  }
}
