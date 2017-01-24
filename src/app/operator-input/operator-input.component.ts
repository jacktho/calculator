import { Component, OnInit, Input, HostListener } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-operator-input',
  templateUrl: './operator-input.component.html',
  styleUrls: ['./operator-input.component.css']
})
export class OperatorInputComponent implements OnInit {
  @Input() operatorType: string;

  isPressed: boolean;

  constructor(private storageService: StorageService) { }

  @HostListener('document: keypress', ['$event'])
  keyDown(event: KeyboardEvent) {
    console.log(event);
    if (this.operatorType === event.key || this.operatorType === event.char
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
    this.storageService.addOperator(this.operatorType);
  }
}
