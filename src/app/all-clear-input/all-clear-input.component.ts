import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { FormulaScreenService } from '../formula-screen.service';

@Component({
  selector: 'app-all-clear-input',
  templateUrl: './all-clear-input.component.html',
  styleUrls: ['./all-clear-input.component.css']
})
export class AllClearInputComponent implements OnInit {

  constructor(private storageService: StorageService, private formulaScreenService: FormulaScreenService) { }

  ngOnInit() {
  }

  input() {
    this.storageService.clearInputs();
    this.storageService.clearDecimal();
    this.formulaScreenService.clearFormulaScreenInputs();
  }

}
