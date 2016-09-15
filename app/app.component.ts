import { Component } from '@angular/core';

@Component({
    selector: 'app-main',
    template: `
      <app-header></app-header>
      
      <app-nav [class.close]="navClosed" (menuClosedEvent)="navClose($event)"></app-nav>
      <div class="view-container" [class.close]="navClosed">
         <router-outlet></router-outlet>
      </div>
      
      
      <app-footer></app-footer>
      
    `,
    styles: [`
        app-header {
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            z-index: 40;
        }
        app-nav {
            position: absolute;
            top: 0;
            bottom: 2.7em;
            left: 0;
            z-index: 50;
        }
        app-nav.close {
            left: -13em;
        }
        .view-container {
            position: absolute;
            top: 3em;
            left: 17em;
            bottom: 2.7em;
            right: -13em;
            background-color: #EEEEEE;
        }
        .view-container.close {
            left: 4em;
        }
    `]
})

export class AppComponent {
    navClosed = false;

    navClose(closed:boolean) {
        this.navClosed = closed;
    }
}