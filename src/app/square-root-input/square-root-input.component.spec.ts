/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SquareRootInputComponent } from './square-root-input.component';

describe('SquareRootInputComponent', () => {
  let component: SquareRootInputComponent;
  let fixture: ComponentFixture<SquareRootInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareRootInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareRootInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
