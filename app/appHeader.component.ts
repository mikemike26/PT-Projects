import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
      <header>
        <h3>Project Time Site</h3>
      </header>
    `,
    styles: ['h3 {font-weight: lighter; color: #ffffff; margin:0; padding: 0.6em 0 0 0; text-align:center;} header {background-color: #1DAAF1; height: 3em; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);}']
})

export class AppHeader { }