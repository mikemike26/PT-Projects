import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
      <header>
        <h3>Project Time Site</h3>
      </header>
    `,
    styles: ['h3 {margin:0; padding: 0.6em 0 0 0; text-align:center;} header {height: 3em; border-bottom: 2px solid #e5e5e5;}']
})

export class AppHeader { }