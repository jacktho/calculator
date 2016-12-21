/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PositiveOrNegativeComponent } from './positive-or-negative.component';

describe('PositiveOrNegativeComponent', () => {
  let component: PositiveOrNegativeComponent;
  let fixture: ComponentFixture<PositiveOrNegativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositiveOrNegativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositiveOrNegativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
