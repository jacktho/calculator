import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { OperatorInputComponent } from './operator-input/operator-input.component';
import { ClearEntryInputComponent } from './clear-entry-input/clear-entry-input.component';
import { AllClearInputComponent } from './all-clear-input/all-clear-input.component';
import { BackspaceInputComponent } from './backspace-input/backspace-input.component';
import { EnterInputComponent } from './enter-input/enter-input.component';
import { PositiveOrNegativeInputComponent } from
  './positive-or-negative-input/positive-or-negative-input.component';
import { SolutionScreenComponent } from './solution-screen/solution-screen.component';
import { FormulaScreenComponent } from './formula-screen/formula-screen.component';
import { SquareRootInputComponent } from './square-root-input/square-root-input.component';
import { SquaredInputComponent } from './squared-input/squared-input.component';
import { PercentInputComponent } from './percent-input/percent-input.component';

import { StorageService } from './storage.service';
import { CalculateService } from './calculate.service';
import { FormulaScreenService } from './formula-screen.service';
import { DecimalInputComponent } from './decimal-input/decimal-input.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberInputComponent,
    OperatorInputComponent,
    ClearEntryInputComponent,
    AllClearInputComponent,
    BackspaceInputComponent,
    EnterInputComponent,
    PositiveOrNegativeInputComponent,
    SolutionScreenComponent,
    FormulaScreenComponent,
    SquareRootInputComponent,
    SquaredInputComponent,
    PercentInputComponent,
    DecimalInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StorageService, CalculateService, FormulaScreenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
