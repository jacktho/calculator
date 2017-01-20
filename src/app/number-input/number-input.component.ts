import { Component, OnInit, Input, HostListener } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css']
})
export class NumberInputComponent implements OnInit {
  @Input() numberValue: any;

  constructor(private storageService: StorageService) { }

  @HostListener('document: keydown', ['$event'])
  keyDown(event: KeyboardEvent) {
    // tslint:disable-next-line:triple-equals
    if (event.key == this.numberValue && event.keyCode !== 32) {
      this.input(event.key);
    }
  }

  ngOnInit() {
  }

  input(value) {
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
