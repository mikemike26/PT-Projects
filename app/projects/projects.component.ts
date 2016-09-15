import { Component } from '@angular/core';

@Component({
    selector: 'projects',
    template: `
      <h1><i class="material-icons">&#xE8DF;</i> Projects</h1>
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">New Project</button>
      <projects-list></projects-list>
    `,
    styles: [`
        :host {
            display: block;
            width: 100%;
            height: 100%;
        }
        .material-icons {
            color: #666666;
        }
    `]
})

export class ProjectsComponent { }