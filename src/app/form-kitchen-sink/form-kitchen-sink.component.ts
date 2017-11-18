import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormArray,

  FormBuilder,
  Validators
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
      name: ['', Validators.required],
      age: ['', [Validators.min(18)]]
    });
  }
  sendStuffOutside (data) {
    console.log(data);
    // .. just call service to do your HTTP stuff
  }
}
