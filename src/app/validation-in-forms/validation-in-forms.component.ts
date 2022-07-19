import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation-in-forms',
  templateUrl: './validation-in-forms.component.html',
  styleUrls: ['./validation-in-forms.component.scss']
})
export class ValidationInFormsComponent implements OnInit {

  formGroupname !: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.formGroupname = new FormGroup({
      'label':new FormControl(null,Validators.required)
    })
  }
 onSubmit(){
  console.log(this.formGroupname);
 }

}
