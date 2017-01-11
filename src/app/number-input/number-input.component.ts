import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css']
})
export class NumberInputComponent implements OnInit {
  @Input() numberValue: any;
  constructor(private storageService: StorageService) { }

  ngOnInit() {
  }

  input() {
    const numberOfInputs = this.findNumberOfInputs();
    if (numberOfInputs < 14
      || (this.storageService.endOfInputs && this.storageService.endOfInputs.operator)) {
      this.storageService.addNumber(this.numberValue);
    }
  }

  findNumberOfInputs() {
    if (!this.storageService.endOfInputs) { return 0; }

    return this.storageService.endOfInputs.value.toString().length;
  }
}
