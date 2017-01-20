import { Component, OnInit, Input, HostListener } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-operator-input',
  templateUrl: './operator-input.component.html',
  styleUrls: ['./operator-input.component.css']
})
export class OperatorInputComponent implements OnInit {
  @Input() operatorType: string;

  constructor(private storageService: StorageService) { }

  @HostListener('document: keypress', ['$event'])
  keyDown(event: KeyboardEvent) {
    if (this.operatorType === event.key && event.srcElement.tagName !== 'INPUT') {
      this.input();
    }
  }

  ngOnInit() {
  }

  input() {
    this.storageService.addOperator(this.operatorType);
  }
}
