import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-header',
    template: `
      <header>
        <h3>Project Time Site</h3>
      </header>
    `,
    styles: [`
        :host {
            display: block;
            z-index: 40;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
        }
        h3 {
            font-weight: lighter; 
            color: #ffffff; 
            margin:0; 
            padding: 0.6em 0 0 0; 
            text-align:center;
            font-size: 1.4em;
            line-height: 1em;
        } 
        header {
            background-color: #1DAAF1; 
            height: 3em; 
        }
    `]
})

export class AppHeader {
    constructor(
        route: ActivatedRoute,
        router: Router
    ) {
        router.events.subscribe(event => {
            if(event instanceof NavigationEnd) {
                // console.log(router);
            }
        })
    };


}