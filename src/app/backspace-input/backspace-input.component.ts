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
    if (!this.storageService.endOfInputs) { return; }

    const valueAsString = this.storageService.endOfInputs.value.toString();

    if (this.storageService.endOfInputs.operator) {
      delete this.storageService.endOfInputs.operator;
    } else if (valueAsString.length > 1) {
      this.storageService.endOfInputs.value = +(valueAsString.substring(0, valueAsString.length - 1));
    } else if (valueAsString.length === 1 && this.storageService.inputs.length === 1) {
      this.storageService.clearInputs();
    } else {
      this.storageService.inputs.pop();
    }
  }
}

