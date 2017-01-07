import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class FormulaScreenService {

  public formulaScreenInputs = [];
  private operators = { 'addition': '+', 'subtraction': '-', 'multiplication': '*', 'division': '/' };

  constructor(private storageService: StorageService) {
    storageService.showEquation.subscribe(value => this.addInputsToScreen());
  }

  addInputsToScreen() {
    this.formulaScreenInputs.push(this.storageService.endOfInputs.value);
    this.formulaScreenInputs.push(this.storageService.endOfInputs.operator);
    for (let i = 0; i < this.formulaScreenInputs.length; i++) {
      for (let operator in this.operators) {
        if (this.formulaScreenInputs[i] === operator) {
          this.formulaScreenInputs[i] = this.operators[operator];
        } else if (this.formulaScreenInputs[i] === 'Enter') {
          this.formulaScreenInputs = [];
        }
      }
    }
  }

  clearFormulaScreenInputs() {
    this.formulaScreenInputs = [];
  }
}
