import { Component, OnInit, HostListener } from '@angular/core';
import { StorageService } from '../storage.service';
import { CalculateService } from '../calculate.service';

@Component({
  selector: 'app-enter-input',
  templateUrl: './enter-input.component.html',
  styleUrls: ['./enter-input.component.css']
})
export class EnterInputComponent implements OnInit {
  isPressed: boolean;

  constructor(private storageService: StorageService,
    private calculateService: CalculateService) { }

  @HostListener('document: keydown.enter', ['$event'])
  keyDown(event: KeyboardEvent) {
    if ((event.target as HTMLElement).tagName !== 'INPUT') {
      this.input();
      this.isPressed = true;
    }
  }

  @HostListener('document: keyup.enter', [])
  keyUp() {
    this.isPressed = false;
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
