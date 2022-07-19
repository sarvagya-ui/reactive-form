import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-grouping-input',
  templateUrl: './grouping-input.component.html',
  styleUrls: ['./grouping-input.component.scss']
})
export class GroupingInputComponent implements OnInit {
  formGroupName !: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formGroupName = new FormGroup({
      'group' : new FormGroup({
        'label1' : new FormControl(null),
        'label2' : new FormControl(null)
      }),
      'label3' : new FormControl(null)
    })
  }
  onSubmit(){
    console.log(this.formGroupName);

  }
}
