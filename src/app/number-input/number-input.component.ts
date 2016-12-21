import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css']
})
export class NumberInputComponent implements OnInit {
  @Input() numberValue: any;
  constructor() { }

  ngOnInit() {
  }

}
