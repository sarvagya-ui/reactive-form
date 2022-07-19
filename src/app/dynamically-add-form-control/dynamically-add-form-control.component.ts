import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamically-add-form-control',
  templateUrl: './dynamically-add-form-control.component.html',
  styleUrls: ['./dynamically-add-form-control.component.scss']
})
export class DynamicallyAddFormControlComponent implements OnInit {

  formGroupName !: FormGroup;
  constructor() { }

  get control(){
    return (<FormArray>this.formGroupName.get('labelDynamic')).controls;
  }

  ngOnInit(): void {
    this.formGroupName = new FormGroup({
      'label': new FormControl(null),
      'labelDynamic': new FormArray([])
    })
  }
  onSubmit() {
    console.log(this.formGroupName);
  }
  addLabel() {
    const control = new FormControl(null);
    (<FormArray>this.formGroupName.get('labelDynamic')).push(control);
  }
}
