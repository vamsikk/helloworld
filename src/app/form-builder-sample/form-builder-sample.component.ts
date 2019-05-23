import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-builder-sample',
  templateUrl: './form-builder-sample.component.html',
  styleUrls: ['./form-builder-sample.component.css']
})

export class FormBuilderSampleComponent {
  form : FormGroup;

  constructor(fb : FormBuilder){
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array(
        [ name ]
      )
    });
  }
}