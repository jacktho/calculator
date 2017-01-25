/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SquareRootComponent } from './square-root.component';

describe('SquareRootComponent', () => {
  let component: SquareRootComponent;
  let fixture: ComponentFixture<SquareRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
