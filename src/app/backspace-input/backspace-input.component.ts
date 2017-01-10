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

  input() {
    if (!this.storageService.inputs.length) { return; }

    this.removeLastItem();
  }

  removeLastItem() {
    if (this.storageService.endOfInputs.operator) {
      delete this.storageService.endOfInputs.operator;
    } else {
      this.removeDigitFromValue();
    }

    this.cleanup();
  }

  removeDigitFromValue() {
    const lastValueAsString = this.storageService.endOfInputs.value.toString();

    this.storageService.endOfInputs.value = +(lastValueAsString.substring(
      0, lastValueAsString.length - 1
    ));
  }

  cleanup() {
    if (!this.storageService.endOfInputs.value) {
      this.storageService.removeLastInput();
    }
  }
}
