import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-input',
  templateUrl: './enter-input.component.html',
  styleUrls: ['./enter-input.component.css']
})
export class EnterInputComponent implements OnInit {

  constructor() { }

  sayHello() {
    alert('hello');
  }

  ngOnInit() {
  }

}
