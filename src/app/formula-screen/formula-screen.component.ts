import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { FormulaScreenService } from '../formula-screen.service';
import { Input } from '../input';

@Component({
  selector: 'app-formula-screen',
  templateUrl: './formula-screen.component.html',
  styleUrls: ['./formula-screen.component.css']
})
export class FormulaScreenComponent implements OnInit {

  constructor(private storageService: StorageService, private formulaScreenService: FormulaScreenService) { }

  ngOnInit() {
  }

  public get currentEquation() {
    return this.formulaScreenService.formulaScreenInputs.join(' ');
  }

}
