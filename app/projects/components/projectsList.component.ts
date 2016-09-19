import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from "rxjs/Subscription";
import {Project} from "../../_classes/project";
import {AppNavService} from "../../appNav.service";
import {ProjectsService} from "../services/projects.service";

@Component({
    selector: 'projects-list',
    template: `
      <div class="demo-card-wide mdl-card mdl-shadow--2dp" *ngFor="let project of projects" (click)="selectProject(project)" [class.selected]="selectedId === project.id">
          <div class="mdl-card__title">
            <h2 class="mdl-card__title-text"><i class="material-icons" *ngIf="project.title.length > 0">&#xE8DF;</i> {{project.title}}</h2>
          </div>
          <div class="mdl-card__supporting-text" [ptLimitWords]="project.description" limit="20"></div>
      </div>
      
      <p *ngIf="projects ? projects.length === 0 : false">There are no projects</p>
    `,
    styles: [`
        :host {
            display: block;
            position: absolute;
            top: 8.3em;
            bottom: 0;
            overflow: auto;
            padding: 0.7em 1em 1em 0;
        }
        .mdl-card {
            margin-bottom: 1em;
            min-height: 5em;
            cursor: pointer;
        }
        .mdl-card__title {
            padding-bottom: 0;
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
    private sub1: Subscription;
    private sub2: Subscription;

    projects: Project[] = [];
    selectedId: number;

    constructor(private router: Router, 
                private appNavService: AppNavService,
                private projectsService: ProjectsService) {

        //we set the route params in our projectsService to bootstrap them up from the child
        this.sub1 = projectsService.projectParams$.subscribe(projectsParams => {
            this.selectedId = +projectsParams.id;
        });
        
        //we want to bind to our projects model in case it changes from a different location
        this.sub2 = projectsService.projects$.subscribe(projects => {
            console.log(projects);
            this.projects = projects;
        });
    }
    
    ngOnInit() {
        this.projects = this.projectsService.getProjects();
    }

    selectProject(project: Project) {
        this.appNavService.navClose(true);
        this.selectedId = project.id;
        this.router.navigate(['/projects', project.id]);
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
    }
}