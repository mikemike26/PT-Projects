import { Component } from '@angular/core';
import {ProjectsService} from "../services/projects.service";

@Component({
    selector: 'projects',
    template: `
      <h1><i class="material-icons">&#xE8DF;</i> Projects</h1>
      <div *ngIf="!deleteConfirm">
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">New Project</button>
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" *ngIf="numberOfProjects > 0" (click)="deletePrompt()">Delete Project</button>
      </div>
      <div *ngIf="deleteConfirm">
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" (click)="deleteProject()">Cancel</button>
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" (click)="deleteProject()">Are you sure?</button>
      </div>
      <projects-list></projects-list>
      <div class="projects-view">
          <router-outlet></router-outlet>
      </div>
    `,
    styles: [`
        :host {
            display: block;
            width: 100%;
            height: 100%;
            position: relative;
        }
        h1 {
            width: 10.7em;
        }
        .material-icons {
            color: #666666;
        }
        .projects-view {
            position: absolute;
            left: 24.5em;
            top: 0;
            right: 0;
            bottom: 0;
        }
    `]
})

export class ProjectsComponent {

    numberOfProjects: number;
    deleteConfirm: boolean = false;

    constructor(private projectsService: ProjectsService) {

    }

    ngOnInit() {
        this.numberOfProjects = this.projectsService.numberOfProjects();
    }

    deletePrompt() {
        this.deleteConfirm = true;
    }

    deleteProject() {
        this.deleteConfirm = false;
    }

}