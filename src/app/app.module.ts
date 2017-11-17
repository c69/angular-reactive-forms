import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// thank you NG CLI for not importing this </irony>
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormKitchenSinkComponent } from './form-kitchen-sink/form-kitchen-sink.component';

const routConfig: Routes = [
  {
    path: 'kitchen-sink',
    component: FormKitchenSinkComponent
  },
  {
    path: '',
    redirectTo: 'kitchen-sink',
    pathMatch: 'full'
  },
];


@NgModule({
  declarations: [
    AppComponent,
    FormKitchenSinkComponent
  ],
  imports: [
    BrowserModule,
    // double thanks to NG CLI ;)
    HttpClientModule,
    RouterModule.forRoot(routConfig, {
      enableTracing: false
    }),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
