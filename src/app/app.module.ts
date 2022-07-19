import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleReactiveFormComponent } from './simple-reactive-form/simple-reactive-form.component';
import { ValidationInFormsComponent } from './validation-in-forms/validation-in-forms.component';
import { GroupingInputComponent } from './grouping-input/grouping-input.component';
import { DynamicallyAddFormControlComponent } from './dynamically-add-form-control/dynamically-add-form-control.component';
import { CustomValidationComponent } from './custom-validation/custom-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleReactiveFormComponent,
    ValidationInFormsComponent,
    GroupingInputComponent,
    DynamicallyAddFormControlComponent,
    CustomValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
