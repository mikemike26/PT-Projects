import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
      <footer>
        <p>Market Technologies, Inc</p>
      </footer>
    `,
    styles: [`
        :host {
            display: block;
        }    
        p {
            color: #ffffff; 
            text-align:center; 
            margin: 1em; 
            font-size: 0.8rem
        } 
        footer {
            background-color: #1278BB; 
            position: fixed; 
            bottom: 0; 
            left: 0; 
            right: 0; 
            border-top: 2px solid #e5e5e5;
        }
    `]
})

export class AppFooter { }