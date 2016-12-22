/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PositiveOrNegativeInputComponent } from './positive-or-negative-input.component';

describe('PositiveOrNegativeInputComponent', () => {
  let component: PositiveOrNegativeInputComponent;
  let fixture: ComponentFixture<PositiveOrNegativeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositiveOrNegativeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositiveOrNegativeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
