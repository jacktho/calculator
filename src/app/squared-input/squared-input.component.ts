import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-squared-input',
  templateUrl: './squared-input.component.html',
  styleUrls: ['./squared-input.component.css']
})
export class SquaredInputComponent implements OnInit {

  constructor(private storageService: StorageService) { }

  ngOnInit() {
  }

  input() {
    this.storageService.clearDecimal();
    if (!this.storageService.endOfInputs) { return; }

    if (this.storageService.endOfInputs.operator) {
      this.addSquareAsNewValueToInputs();
    } else {
      this.changeValueToSquared();
    }
  }

  addSquareAsNewValueToInputs() {
    const squared = Math.pow(this.storageService.endOfInputs.value, 2);
    this.storageService.addNumber(squared);
  }

  changeValueToSquared() {
    const squared = Math.pow(this.storageService.endOfInputs.value, 2);
    this.storageService.endOfInputs.value = squared;
  }
}
