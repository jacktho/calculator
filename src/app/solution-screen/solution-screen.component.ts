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
    const hasWholeNumberWithDecimalPlacesOfZero: boolean =
      !this.decimalPlaceHasNumberGreaterThanZero()
      && this.storageService.endOfInputs
      && this.storageService.decimalPlaceCount > 0
      && this.storageService.endOfInputs.value > 0;

    const decimalButtonWasJustPressed =
      (!this.storageService.inputs.length
      || this.storageService.endOfInputs.operator)
      && this.storageService.decimalPlaceCount === 1;

    const decimalPlaceWithNoValueOrValueEqualsZero = this.storageService.decimalPlaceCount > 0
      && (!this.storageService.endOfInputs || this.storageService.endOfInputs.value === 0);

    const noInputsOrOperatorIsEquals = !this.storageService.inputs.length
      || this.storageService.endOfInputs.operator === '=';

    if (decimalButtonWasJustPressed) {
      return '0.';
    } else if (decimalPlaceWithNoValueOrValueEqualsZero) {
      return this.createDotZeroString(0);
    } else if (hasWholeNumberWithDecimalPlacesOfZero) {
      return this.createDotZeroString(this.storageService.endOfInputs.value);
    } else if (noInputsOrOperatorIsEquals) {
      return this.storageService.solution.toString();
    } else {
      return this.addCorrectNumberOfTrailingZeros();
    }
  }

  addCorrectNumberOfTrailingZeros() {
    const valueToString = this.storageService.endOfInputs.value.toString();
    const splitValue = valueToString.split('.');
    let zeros = '';

    if (splitValue[1] && splitValue[1].length < this.storageService.decimalPlaceCount) {
      for (let i = splitValue[1].length + 1; i < this.storageService.decimalPlaceCount; i++) {
        zeros += 0;
      }
      return valueToString + zeros;
    }
    return valueToString;
  }

  decimalPlaceHasNumberGreaterThanZero() {
    if (!this.storageService.inputs.length) {
      return false;
    }

    const valueAsString: string = this.storageService.endOfInputs.value.toString();
    const splitString: string[] = valueAsString.split('.');

    if (+splitString[1] > 0) {
      return true;
    }
    return false;
  }

  createDotZeroString(wholeNumber: number) {
    let zeroString = wholeNumber.toString() + '.';
    for (let i = 1; i < this.storageService.decimalPlaceCount; i++) {
      zeroString += '0';
    }
    return zeroString;
  }

}
