import { Component, OnInit, HostListener } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-decimal-input',
  templateUrl: './decimal-input.component.html',
  styleUrls: ['./decimal-input.component.css']
})
export class DecimalInputComponent implements OnInit {

  constructor(private storageService: StorageService) { }

  @HostListener('document: keypress', ['$event'])
  keyDown(event: KeyboardEvent) {
    if (event.key === '.' && event.srcElement.tagName !== 'INPUT') {
      this.input();
    }
  }

  ngOnInit() {
  }

  input() {
    if (this.storageService.decimalPlaceCount > 0) { return; }

    this.storageService.decimalPlaceCount = 1;
  }
}
