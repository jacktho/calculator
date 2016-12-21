import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-operator-input',
  templateUrl: './operator-input.component.html',
  styleUrls: ['./operator-input.component.css']
})
export class OperatorInputComponent implements OnInit {
  @Input() operatorType: string;
  characterCode: string;

  constructor() { }

  ngOnInit() {
    this.assignCharacterCode();
  }

  assignCharacterCode() {
    switch (this.operatorType) {
      case 'percentage':
        this.characterCode = String.fromCodePoint(0x0025);
        break;
      case 'squareRoot':
        this.characterCode = String.fromCodePoint(0x221A);
        break;
      case 'squared':
        this.characterCode = 'x' + String.fromCodePoint(0x00B2);
        break;
      case 'division':
        this.characterCode = String.fromCodePoint(0x00F7);
        break;
      case 'multiplication':
        this.characterCode = String.fromCodePoint(0x00D7);
        break;
      case 'addition':
        this.characterCode = String.fromCodePoint(0x002B);
        break;
      case 'subtraction':
        this.characterCode = String.fromCodePoint(0x2212);
        break;
      default:
        break;
    }
  }

}
