import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-positive-or-negative-input',
  templateUrl: './positive-or-negative-input.component.html',
  styleUrls: ['./positive-or-negative-input.component.css']
})
export class PositiveOrNegativeInputComponent implements OnInit {

  constructor(private storageService: StorageService) { }

  ngOnInit() {
  }

  input() {
    if (!this.storageService.inputs.length || this.storageService.endOfInputs.operator) {
      return;
    }

    const valueAsString = this.storageService.endOfInputs.value.toString();

    if (valueAsString.charAt(0) === '-') {
      this.storageService.endOfInputs.value = +valueAsString.slice(1);
      console.log(this.storageService.endOfInputs.value);
    } else {
      const negative = '-';
      this.storageService.endOfInputs.value = +negative.concat(valueAsString);
      console.log(this.storageService.endOfInputs.value);
    }
  }
}
