import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { FormulaScreenService } from '../formula-screen.service';

@Component({
  selector: 'app-backspace-input',
  templateUrl: './backspace-input.component.html',
  styleUrls: ['./backspace-input.component.css']
})
export class BackspaceInputComponent implements OnInit {


  constructor(private storageService: StorageService, private formulaScreenService: FormulaScreenService) { }

  ngOnInit() {
  }

  get valueAsString() {
    return this.storageService.endOfInputs.value.toString();
  }

  input() {
    if (!this.storageService.endOfInputs) { return; }

    if (this.storageService.endOfInputs.operator) {
      delete this.storageService.endOfInputs.operator;
    } else if (this.valueAsString.length === 1 && this.storageService.inputs.length === 1) {
      this.storageService.clearInputs();
      this.storageService.clearDecimal();
    } else if (this.valueAsString.length > 1) {
      this.checkForExistingDecimal();
      this.setDecimalLength();
    } else {
      this.storageService.inputs.pop();
      this.storageService.clearDecimal();
    }

    if (!this.storageService.endOfInputs) {
      this.storageService.clearInputs();
      this.formulaScreenService.clearFormulaScreenInputs();
    }
  }

  checkForExistingDecimal() {
    const splitValue = this.valueAsString.split('.');
    const wholeNumberDigits = splitValue[0] ? splitValue[0].replace('-', '').length : 0;
    const decimalPlaces = splitValue[1] ? splitValue[1].length : 0;

    if (decimalPlaces === 1 && wholeNumberDigits === 0) {
      this.storageService.inputs.pop();
      this.storageService.clearDecimal();
    } else if (decimalPlaces === 1 && wholeNumberDigits > 0) {
      this.storageService.clearDecimal();
      this.storageService.endOfInputs.value = +(this.valueAsString.substring(0, this.valueAsString.length - 1));
    } else {
      this.storageService.endOfInputs.value = +(this.valueAsString.substring(0, this.valueAsString.length - 1));

      if (isNaN(this.storageService.endOfInputs.value)) {
        this.storageService.inputs.pop();
      }
    }
  }

  setDecimalLength() {
    if (this.storageService.decimal === undefined) { return; }

    if (this.storageService.decimal.length > 1) {
      this.storageService.decimal = this.storageService.decimal.substring(0, this.storageService.decimal.length - 1);
    }
  }
}
