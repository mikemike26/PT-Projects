import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
      <footer>
        <p>Market Technologies, Inc</p>
      </footer>
    `,
    styles: ['p {text-align:right; margin: 1em; font-size: 0.5rem}']
})

export class AppFooter { }