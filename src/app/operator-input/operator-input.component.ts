import { Component, OnInit, Input, HostListener } from '@angular/core';
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

  @HostListener('document: keypress', ['$event'])
  keyDown(event: KeyboardEvent) {
    if (this.operatorType === event.key) {
      this.input();
    }
  }

  ngOnInit() {
    this.assignCharacterCode();
  }

  input() {
    this.storageService.addOperator(this.operatorType);
  }

  assignCharacterCode() {
    switch (this.operatorType) {
      case '/':
        this.characterCode = String.fromCodePoint(0x00F7);
        break;
      case '*':
        this.characterCode = String.fromCodePoint(0x00D7);
        break;
      case '+':
        this.characterCode = String.fromCodePoint(0x002B);
        break;
      case '-':
        this.characterCode = String.fromCodePoint(0x002D);
        break;
      default:
        break;
    }
  }

}
