import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormKitchenSinkComponent } from './form-kitchen-sink.component';

describe('FormKitchenSinkComponent', () => {
  let component: FormKitchenSinkComponent;
  let fixture: ComponentFixture<FormKitchenSinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormKitchenSinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormKitchenSinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
