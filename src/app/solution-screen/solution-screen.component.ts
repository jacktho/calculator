import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-solution-screen',
  templateUrl: './solution-screen.component.html',
  styleUrls: ['./solution-screen.component.css']
})
export class SolutionScreenComponent implements OnInit {

  constructor(private storageService: StorageService) { }

  ngOnInit() {
  }

  public get currentNumber() {
    if (!this.storageService.inputs.length || this.storageService.endOfInputs.operator === '=') {
      return this.storageService.solution;
    } else {
      return this.storageService.endOfInputs.value;
    }
  }

}
