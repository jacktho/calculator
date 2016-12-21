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
import { PositiveOrNegativeComponent } from './positive-or-negative/positive-or-negative.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberInputComponent,
    OperatorInputComponent,
    ClearEntryInputComponent,
    AllClearInputComponent,
    BackspaceInputComponent,
    EnterInputComponent,
    PositiveOrNegativeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
