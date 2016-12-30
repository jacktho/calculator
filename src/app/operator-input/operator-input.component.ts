import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-operator-input',
  templateUrl: './operator-input.component.html',
  styleUrls: ['./operator-input.component.css']
})
export class OperatorInputComponent implements OnInit {
  @Input() operatorType: string;
  characterCode: string;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.assignCharacterCode();
  }

  input() {
    this.storageService.addOperator(this.operatorType);
  }

  assignCharacterCode() {
    switch (this.operatorType) {
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
