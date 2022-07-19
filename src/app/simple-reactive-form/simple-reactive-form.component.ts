import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-simple-reactive-form',
  templateUrl: './simple-reactive-form.component.html',
  styleUrls: ['./simple-reactive-form.component.scss']
})
export class SimpleReactiveFormComponent implements OnInit {

  formGroupname !: FormGroup;
  label1 !: string;
  label2 !: string;
  constructor() { }

  ngOnInit(): void {
    this.formGroupname = new FormGroup(
      {
       'label1' : new FormControl(null),
       'label2' : new FormControl('hello')
       //You can give intial value to form Control - new FormControl('Hello World')
      }
    )
  }
  onSubmit(){
    console.log(this.formGroupname);
  }

}
