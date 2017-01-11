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
    if (this.storageService.decimalPlaceCount > 0) { return; }

    this.storageService.decimalPlaceCount = 1;
  }
}
