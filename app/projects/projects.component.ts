import { Component } from '@angular/core';

@Component({
    selector: 'projects',
    template: `
      <h1><i class="material-icons">&#xE8DF;</i> Projects</h1>
      <div [class.hidden]="deleteConfirm">
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">New Project</button>
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" (click)="deletePrompt()">Delete Project</button>
      </div>
      <div [class.hidden]="!deleteConfirm">
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" (click)="deleteProject()">Cancel</button>
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" (click)="deleteProject()">Are you sure?</button>
      </div>
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

export class ProjectsComponent {
    deleteConfirm : boolean = false;

    deletePrompt() {
        this.deleteConfirm = true;
    }

    deleteProject() {
        this.deleteConfirm = false;
    }

}