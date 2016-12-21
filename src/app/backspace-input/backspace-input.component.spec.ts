/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BackspaceInputComponent } from './backspace-input.component';

describe('BackspaceInputComponent', () => {
  let component: BackspaceInputComponent;
  let fixture: ComponentFixture<BackspaceInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackspaceInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackspaceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
