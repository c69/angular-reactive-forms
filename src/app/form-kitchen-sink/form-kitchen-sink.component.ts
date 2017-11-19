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
      age: ['', [Validators.min(18)]],
      phones: this.fb.array([
        this.createFormGroup_Phone('Mobile')
      ])
    });
  }
  addPhone () {
    // untyped forms in Angular is subject of many complains
    // for 5.0.0 we can still use old TS trick with "type assertion"
    // but pull request with fix is already submitted
    // so, hopefully the wait will not be too long
    (this.kitchenSink.controls.phones as FormArray).push(
      this.createFormGroup_Phone()
    );
  }
  removePhone (index) {
    // using .get is alternative addressation way
    (this.kitchenSink.get('phones') as FormArray).removeAt(index);
  }
  createFormGroup_Phone (initialType: string = '', initialNumber: string = '') {
    return this.fb.group({
      type: [initialType],
      number: [initialNumber, Validators.maxLength(20)]
    });
  }
  sendStuffOutside (data) {
    console.log(data);
    // .. just call service to do your HTTP stuff
  }
}
