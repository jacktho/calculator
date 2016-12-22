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
    this.storageService.addNumber(this.numberValue);
  }
}
