import { Component } from '@angular/core';

@Component({
    selector: 'app-main',
    template: `
      <app-header></app-header>
      <h1>My First Angular 2 App</h1>
      <app-nav></app-nav>
      <router-outlet></router-outlet>
    `,
    styles: []
})

export class AppComponent { }