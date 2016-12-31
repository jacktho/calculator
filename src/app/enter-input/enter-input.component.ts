import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { CalculateService } from '../calculate.service';

@Component({
  selector: 'app-enter-input',
  templateUrl: './enter-input.component.html',
  styleUrls: ['./enter-input.component.css']
})
export class EnterInputComponent implements OnInit {

  constructor(private storageService: StorageService,
    private calculateService: CalculateService) { }

  ngOnInit() {
  }

  input() {
    this.storageService.solution = this.calculateService.calculate();
    this.storageService.addOperator('Enter');
  }
}
