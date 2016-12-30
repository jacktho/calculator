import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-square-root-input',
  templateUrl: './square-root-input.component.html',
  styleUrls: ['./square-root-input.component.css']
})
export class SquareRootInputComponent implements OnInit {

  constructor(private storageService: StorageService) { }

  ngOnInit() {
  }

  input() {
    if (!this.storageService.endOfInputs) { return; }

    if (this.storageService.endOfInputs.operator) {
      this.addSquareRootAsNewValueToInputs();
    } else {
      this.changeValueToSquareRoot();
    }
  }

  addSquareRootAsNewValueToInputs() {
    const squareRoot = Math.sqrt(this.storageService.endOfInputs.value);
    this.storageService.addNumber(squareRoot);
  }

  changeValueToSquareRoot() {
    const squareRoot = Math.sqrt(this.storageService.endOfInputs.value);
    this.storageService.endOfInputs.value = squareRoot;
  }
}
