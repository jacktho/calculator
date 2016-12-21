/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AllClearInputComponent } from './all-clear-input.component';

describe('AllClearInputComponent', () => {
  let component: AllClearInputComponent;
  let fixture: ComponentFixture<AllClearInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllClearInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllClearInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
