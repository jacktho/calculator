import { Component, OnInit, HostListener } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-backspace-input',
  templateUrl: './backspace-input.component.html',
  styleUrls: ['./backspace-input.component.css']
})
export class BackspaceInputComponent implements OnInit {

  constructor(private storageService: StorageService) { }

  @HostListener('document: keydown', ['$event'])
  keyDown(event: KeyboardEvent) {
    if (event.key === 'Backspace' && (event.target as HTMLElement).tagName !== 'INPUT') {
      this.input();
    }
  }

  ngOnInit() {
  }

  input() {
    if (this.storageService.decimalPlaceCount > 0) {
      this.storageService.decimalPlaceCount--;
    }

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
