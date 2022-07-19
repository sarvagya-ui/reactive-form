import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-validation',
  templateUrl: './custom-validation.component.html',
  styleUrls: ['./custom-validation.component.scss']
})
export class CustomValidationComponent implements OnInit {
  formGroupName !: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.formGroupName = new FormGroup({
      'label' : new FormControl('please fill')
    })
  }
  onSubmit(){
    console.log(this.formGroupName);

  }


}
