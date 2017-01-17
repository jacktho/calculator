import { Injectable } from '@angular/core';
import { SavedInputs } from './savedInputs';
import { StorageService } from './storage.service';
import { CalculateService } from './calculate.service';

@Injectable()
export class SavedInputsService {
  savedFormulas: SavedInputs[] = [];

  constructor(
    private storageService: StorageService,
    private calculateService: CalculateService
  ) { }

  save(title: string = this.createFormulaPreview()) {
    if (!this.storageService.inputs.length) { return; }


    this.savedFormulas.push({ inputs: this.storageService.inputs, title });
  }

  createFormulaPreview(): string {
    if (!this.storageService.inputs.length) { return; }

    let previewString = '';

    for (let index = 0; index < this.storageService.inputs.length; index++) {
      const input = this.storageService.inputs[index];

      previewString += input.value + ' ';

      if (input.operator !== '=') {
        previewString += input.operator + ' ';
      }
    }

    if (previewString.length > 12) {
      previewString = previewString.slice(0, 11);
      previewString += '...';
    }

    return previewString;
  }

  load(index: number) {
    this.storageService.inputs = this.savedFormulas[index].inputs;
    this.storageService.solution = this.calculateService.calculate();
  }

  delete(index: number) {
    this.savedFormulas.splice(index, 1);
  }
}
