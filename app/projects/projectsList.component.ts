import {Component} from '@angular/core';
import {ProjectsData} from "../_models/projectsData";
import {Project} from "./_classes/project";
import {Router} from '@angular/router';
import {AppNavService} from "../appNav.service";
import {ProjectsService} from "./projects.service";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'projects-list',
    template: `
      <div class="demo-card-wide mdl-card mdl-shadow--2dp" *ngFor="let project of projects" (click)="selectProject(project)" [class.selected]="selectedId === project.id">
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
            padding: 0.7em 1em 1em 0;
        }
        .mdl-card {
            margin-bottom: 1em;
            min-height: 5em;
            cursor: pointer;
        }
        .mdl-card.selected {
            box-shadow: 5px 6px 9px 0 rgba(0, 0, 0, .5);
            position: relative;
            bottom: .5em;
                
        }
        .material-icons {
            color: #6F6F6F;
        }
    `]
})

export class ProjectsListComponent {
    projects: Project[];
    selectedId: number;
    private sub: Subscription;

    constructor(private projectsData: ProjectsData, 
                private router: Router, 
                private appNavService: AppNavService,
                private projectsService: ProjectsService) {

        //we set the route params in our projectsService to bootstrap them up from the child
        this.sub = projectsService.projectParams$.subscribe(projectsParams => {
            this.selectedId = +projectsParams.id;
        });
    }

    ngOnInit() {
        this.projects = this.projectsData.getProjects();
    }

    selectProject(project: Project) {
        this.appNavService.navClose(true);
        this.selectedId = project.id;
        this.router.navigate(['/projects/details', project.id]);
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.sub.unsubscribe();
    }
}