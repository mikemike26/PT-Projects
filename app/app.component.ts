import { Component } from '@angular/core';

@Component({
    selector: 'app-main',
    template: `
      <app-header></app-header>
      
      <app-nav></app-nav>
      <div class="view-container">
         <router-outlet></router-outlet>
      </div>
      
      
      <app-footer></app-footer>
      
    `,
    styles: [`
        app-nav {
            position: absolute;
            top: 0;
            bottom: 2.7em;
            left: 0;
            z-index: 50;
        }
        .view-container {
            position: absolute;
            top: 3em;
            left: 17em;
            bottom: 2.7em;
            right: 0;
            background-color: #EEEEEE;
        }
    `]
})

export class AppComponent { }