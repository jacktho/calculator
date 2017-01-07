/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormulaScreenService } from './formula-screen.service';

describe('FormulaScreenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormulaScreenService]
    });
  });

  it('should ...', inject([FormulaScreenService], (service: FormulaScreenService) => {
    expect(service).toBeTruthy();
  }));
});
