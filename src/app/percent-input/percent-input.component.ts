import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from '../storage.service';
import { CalculateService } from '../calculate.service';

@Component({
  selector: 'app-percent-input',
  templateUrl: './percent-input.component.html',
  styleUrls: ['./percent-input.component.css']
})
export class PercentInputComponent implements OnInit {

  constructor(private storageService: StorageService, private calculateService: CalculateService) { }

  get endOfInputsValue() {
    return this.storageService.endOfInputs.value;
  }

  get currentTotal() {
    return this.calculateService.calculate();
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
    const percent = +((this.currentTotal / 100) * this.currentTotal).toFixed(13);
    this.storageService.addNumber(percent);
  }

  changeValueToPercentageOfPreviousValue() {
    const percent = +((this.endOfInputsValue / 100) * this.currentTotal).toFixed(13);
    this.storageService.endOfInputs.value = percent;
  }
}
