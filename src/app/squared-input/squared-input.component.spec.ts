/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SquaredInputComponent } from './squared-input.component';

describe('SquaredInputComponent', () => {
  let component: SquaredInputComponent;
  let fixture: ComponentFixture<SquaredInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquaredInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquaredInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
