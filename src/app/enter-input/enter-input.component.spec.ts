/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EnterInputComponent } from './enter-input.component';

describe('EnterInputComponent', () => {
  let component: EnterInputComponent;
  let fixture: ComponentFixture<EnterInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
