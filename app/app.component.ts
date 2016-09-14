import { Component } from '@angular/core';

@Component({
    selector: 'app-main',
    template: `
      <app-header></app-header>
      
      <app-nav></app-nav>
      <router-outlet></router-outlet>
      
      <app-footer></app-footer>
      
    `,
    styles: []
})

export class AppComponent { }