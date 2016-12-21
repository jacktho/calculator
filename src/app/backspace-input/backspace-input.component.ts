import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-backspace-input',
  templateUrl: './backspace-input.component.html',
  styleUrls: ['./backspace-input.component.css']
})
export class BackspaceInputComponent implements OnInit {
  @Input() backspace: string;
  constructor() { }

  ngOnInit() {
  }

}
