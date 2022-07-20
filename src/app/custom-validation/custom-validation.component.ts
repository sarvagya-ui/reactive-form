import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-validation',
  templateUrl: './custom-validation.component.html',
  styleUrls: ['./custom-validation.component.scss']
})
export class CustomValidationComponent implements OnInit {
  formGroupName !: FormGroup;
  constructor() { }
  restrictedValue = ["hello world","hi world"];

  ngOnInit(): void {
    this.formGroupName = new FormGroup({
      'label': new FormControl(null,[Validators.required,this.isRestricted.bind(this)],)
    })
  }
  onSubmit() {
    console.log(this.formGroupName);
  }

 isRestricted(control: FormControl){
  if(this.restrictedValue.includes(control.value)){
    return { 'isRestricted' : true};
  }
  return null;
 }
}
