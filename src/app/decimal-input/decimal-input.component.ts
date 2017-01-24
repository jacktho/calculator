import { Component, OnInit, HostListener } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-decimal-input',
  templateUrl: './decimal-input.component.html',
  styleUrls: ['./decimal-input.component.css']
})
export class DecimalInputComponent implements OnInit {
  isPressed: boolean;

  constructor(private storageService: StorageService) { }

  @HostListener('document: keypress', ['$event'])
  keyDown(event: KeyboardEvent) {
    if (event.key === '.' || event.char === '.'
      && (event.target as HTMLElement).tagName !== 'INPUT') {
      this.input();
      this.isPressed = true;
    }
  }

  @HostListener('document: keyup', [])
  keyUp() {
    this.isPressed = false;
  }

  ngOnInit() {
  }

  input() {
    if (this.storageService.decimalPlaceCount > 0) { return; }

    this.storageService.decimalPlaceCount = 1;
  }
}
