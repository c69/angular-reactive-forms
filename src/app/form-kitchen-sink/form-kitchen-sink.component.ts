import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormArray,

  FormBuilder,
  // Validator
} from '@angular/forms';

@Component({
  selector: 'app-form-kitchen-sink',
  templateUrl: './form-kitchen-sink.component.html',
  styleUrls: ['./form-kitchen-sink.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormKitchenSinkComponent implements OnInit {
  kitchenSink: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.kitchenSink = this.fb.group({
      name: ['']
    });
  }

}
