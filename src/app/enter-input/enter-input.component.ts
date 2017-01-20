import { Component, OnInit, HostListener } from '@angular/core';
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

 @HostListener('document: keydown.enter', [])
  keyDown() {
      this.input();
  }

  ngOnInit() {
  }

  input() {
    if (!this.storageService.inputs.length) { return; }
    this.storageService.solution = this.calculateService.calculate();
    this.storageService.addOperator('=');
    this.storageService.title = '';
  }
}
