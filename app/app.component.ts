import { Component } from '@angular/core';
import {AppNavService} from "./appNav.service";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'app-main',
    template: `
      <app-header></app-header>
      
      <app-nav [class.close]="navClosed"></app-nav>
      <div class="view-container" [class.close]="navClosed">
         <router-outlet></router-outlet>
      </div>
      
      
      <app-footer></app-footer>
      
    `,
    styles: [`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            overflow: hidden;
            position: relative;
        }
        app-header {
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
        }
        app-nav {
            position: absolute;
            top: 0;
            bottom: 3.3em;
            left: 0;
        }
        app-nav.close {
            left: -13em;
        }
        .view-container {
            padding: 0 1em;
            position: absolute;
            top: 3em;
            left: 17em;
            bottom: 3.2em;
            right: -13em;
            background-color: #EEEEEE;
        }
        .view-container.close {
            left: 4em;
            right: 0;
        }
    `]
})

export class AppComponent {
    navClosed = false;
    subscription: Subscription;

    constructor(private appNavService: AppNavService) {
        this.subscription = appNavService.navClose$.subscribe(
            navClose => {
                this.navClosed = navClose
            });
    }

    navClose(closed:boolean) {
        this.navClosed = closed;
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }
}