import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-percent-input',
  templateUrl: './percent-input.component.html',
  styleUrls: ['./percent-input.component.css']
})
export class PercentInputComponent implements OnInit {

  constructor(private storageService: StorageService) { }

  get endOfInputsValue() {
    return this.storageService.endOfInputs.value;
  }

  ngOnInit() {
  }

  input() {
    if (!this.storageService.endOfInputs) { return; }

    if (this.storageService.endOfInputs.operator) {
      this.addPercentAsNewValueToInputs();
    } else if (this.storageService.inputs.length > 1) {
      this.changeValueToPercentageOfPreviousValue();
    } else {
      this.storageService.endOfInputs.value = 0;
    }
  }

  addPercentAsNewValueToInputs() {
    const percent = (this.endOfInputsValue / 100) * this.endOfInputsValue;
    this.storageService.addNumber(percent);
  }

  changeValueToPercentageOfPreviousValue() {
    let previousNumber = this.storageService.inputs[this.storageService.inputs.length - 2].value;
    if (previousNumber === 0) {
      for (let i = this.storageService.inputs.length - 2; i >= 0; i--) {
        if (this.storageService.inputs[i].value !== 0) {
          previousNumber = this.storageService.inputs[i].value;
          break;
        } else {
          previousNumber = 0;
        }
      }
    }
    const percent = (this.endOfInputsValue / 100) * previousNumber;
    this.storageService.endOfInputs.value = percent;
  }
}
