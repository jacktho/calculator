import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-clear-entry-input',
  templateUrl: './clear-entry-input.component.html',
  styleUrls: ['./clear-entry-input.component.css']
})
export class ClearEntryInputComponent implements OnInit {

  constructor(private storageService: StorageService) { }

  ngOnInit() {
  }

  input() {
    if (!this.storageService.endOfInputs) { return; }

    if (this.storageService.endOfInputs.operator && this.storageService.inputs.length > 1) {
      delete this.storageService.endOfInputs.operator;
    } else if (this.storageService.inputs.length === 1) {
      this.storageService.clearInputs();
    } else {
      this.storageService.inputs.pop();
    }
  }

}
