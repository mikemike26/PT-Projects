import { Component } from '@angular/core';

@Component({
    selector: 'projects',
    template: `

      <h1>Projects</h1>
    `,
    styles: [`
        :host {
            display: block;
            width: 100%;
            height: 100%;
        }
    `]
})

export class ProjectsComponent { }