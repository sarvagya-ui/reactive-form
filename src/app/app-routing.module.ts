import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomValidationComponent } from './custom-validation/custom-validation.component';
import { DynamicallyAddFormControlComponent } from './dynamically-add-form-control/dynamically-add-form-control.component';
import { GroupingInputComponent } from './grouping-input/grouping-input.component';
import { SimpleReactiveFormComponent } from './simple-reactive-form/simple-reactive-form.component';
import { ValidationInFormsComponent } from './validation-in-forms/validation-in-forms.component';

const routes: Routes = [
  { path: 'SimpleReactiveFormComponent', component: SimpleReactiveFormComponent },
  { path: 'ValidationInFormsComponent', component: ValidationInFormsComponent },
  { path: 'GroupingInputComponent', component: GroupingInputComponent },
  { path: 'DynamicallyAddFormControlComponent', component: DynamicallyAddFormControlComponent },
  { path: 'CustomValidationComponent', component: CustomValidationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
