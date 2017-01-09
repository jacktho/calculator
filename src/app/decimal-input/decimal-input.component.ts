import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-decimal-input',
  templateUrl: './decimal-input.component.html',
  styleUrls: ['./decimal-input.component.css']
})
export class DecimalInputComponent implements OnInit {

  constructor(private storageService: StorageService) { }

  ngOnInit() {
  }

  input() {
    if (this.storageService.decimal !== undefined) { return; }

    if (this.storageService.endOfInputs && this.storageService.endOfInputs.operator === '=') {
      this.storageService.clearInputs();
    }

    this.storageService.decimal = '.';

    if (!this.storageService.endOfInputs || this.storageService.endOfInputs.value.toString().includes('.')) {
      this.storageService.inputs.push({ value: 0 });
    }

    this.storageService.originalNumber = this.storageService.endOfInputs.value;
  }
}
