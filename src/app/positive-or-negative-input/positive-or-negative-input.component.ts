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

    this.storageService.endOfInputs.value *= -1;
  }
}
