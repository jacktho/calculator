import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { Input } from '../input';

@Component({
  selector: 'app-enter-input',
  templateUrl: './enter-input.component.html',
  styleUrls: ['./enter-input.component.css']
})
export class EnterInputComponent implements OnInit {

  constructor(private storageService: StorageService) { }

  ngOnInit() {
  }

  input() {
    this.storageService.solution = this.calculate();
    this.storageService.addOperator('Enter');
  }

  calculate() {
    const finalResult: Input = this.storageService.inputs.reduce(
      (previous: Input, current: Input) => {
        const result: number = this.arithmetic(previous.operator, previous.value, current.value);
        return { value: result, operator: current.operator };
      }
    );
    return finalResult.value;
  }

  arithmetic(operator, firstValue, secondValue) {
    switch (operator) {
      case 'addition':
        return firstValue + secondValue;
      case 'subtraction':
        return firstValue - secondValue;
      case 'multiplication':
        return firstValue * secondValue;
      case 'division':
        return firstValue / secondValue;
      default:
        break;
    }
  }
}
