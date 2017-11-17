import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';

  navLinks = [{
      path: 'kitchen-sink',
      name: 'Kitchen Sink'
    },
  ];

  constructor(router: Router) {
    this.title = 'App Loaded';
  }
}
