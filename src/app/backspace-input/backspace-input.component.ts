import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-backspace-input',
  templateUrl: './backspace-input.component.html',
  styleUrls: ['./backspace-input.component.css']
})
export class BackspaceInputComponent implements OnInit {

  constructor(private storageService: StorageService) { }

  ngOnInit() {
  }

  get valueAsString() {
    return this.storageService.endOfInputs.value.toString();
  }

  input() {
    if (!this.storageService.endOfInputs) { return; }

    if (this.storageService.endOfInputs.operator) {
      delete this.storageService.endOfInputs.operator;
    } else if (this.valueAsString.length > 1) {
      this.checkForExistingDecimal();
      this.setDecimalLength();
    } else if (this.valueAsString.length === 1 && this.storageService.inputs.length === 1) {
      this.storageService.clearInputs();
      this.storageService.clearDecimal();
    } else {
      this.storageService.inputs.pop();
      this.storageService.clearDecimal();
    }
  }

  checkForExistingDecimal() {
    if (this.valueAsString.charAt(this.valueAsString.length - 2) === '.') {
      this.storageService.endOfInputs.value = +(this.valueAsString.substring(0, this.valueAsString.length - 1));
      this.storageService.clearDecimal();
      this.storageService.resetOriginalNumber();
    } else {
      this.storageService.endOfInputs.value = +(this.valueAsString.substring(0, this.valueAsString.length - 1));
    }
  }

  setDecimalLength() {
    if (this.storageService.decimal === undefined) { return; }
    if (this.storageService.decimal.length > 1) {
      this.storageService.decimal = this.storageService.decimal.substring(0, this.storageService.decimal.length - 1);
    }
  }
}

