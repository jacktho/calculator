/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SavedInputsService } from './saved-inputs.service';

describe('SavedInputsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SavedInputsService]
    });
  });

  it('should ...', inject([SavedInputsService], (service: SavedInputsService) => {
    expect(service).toBeTruthy();
  }));
});
