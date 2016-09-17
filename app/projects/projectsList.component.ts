import { Component } from '@angular/core';
import {ProjectsData} from "../_models/projectsData";
import {Project} from "./_classes/project";
import {Router} from '@angular/router';
import {AppNavService} from "../appNav.service";

@Component({
    selector: 'projects-list',
    template: `
      <div class="demo-card-wide mdl-card mdl-shadow--2dp" *ngFor="let project of projects" (click)="selectProject(project)">
          <div class="mdl-card__title">
            <h2 class="mdl-card__title-text"><i class="material-icons">&#xE8DF;</i> {{project.title}}</h2>
          </div>
          <div class="mdl-card__supporting-text" [ptLimitWords]="project.description" limit="20"></div>
      </div>
    `,
    styles: [`
        :host {
            display: block;
            position: absolute;
            top: 7.3em;
            bottom: 1.5em;
            overflow: auto;
            padding: 0.7em 0 1em 0;
        }
        .mdl-card {
            margin-bottom: 1em;
            min-height: 5em;
            cursor: pointer;
        }
        .material-icons {
            color: #6F6F6F;
        }
    `]
})

export class ProjectsListComponent {
    projects: Project[];

    constructor(private projectsData: ProjectsData, 
                private router: Router, 
                private appNavService: AppNavService) {}

    ngOnInit() {
        this.projects = this.projectsData.getProjects();

        // console.log(this.projects);
    }

    selectProject(project: Project) {
        // console.log(project);

        this.appNavService.navClose(true);
        this.router.navigate(['/projects/details', project.id]);
    }
}