import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Project} from "../../_classes/project";
import {ProjectsService} from "../services/projects.service";
import {AppNavService} from "../../appNav.service";

@Component({
    selector: 'projects-detail',
    template: `
      <div class="detail-wrapper" *ngIf="selectedId > -1">
        <pt-text-input name="Title" placeHolder="Title" [(output)]="project.title"></pt-text-input>
      </div>
    `,
    styles: [`
        :host {
            display: block;
        }
        .overview {
            width: 100%;
        }
    `]
})

export class ProjectsDetailComponent {
    private sub:any;

    selectedId:number;
    project:Project;

    constructor(private route:ActivatedRoute, private projectsService:ProjectsService, private appNavService:AppNavService) {

    }

    ngOnInit() {
        //on route change, set params in projectsServer so our parent component can make use of it
        this.sub = this.route.params.subscribe(params => {
            this.projectsService.setParams(params);

            this.selectedId = +params["id"];
            this.appNavService.navClose(this.selectedId > -1);

            this.project = this.projectsService.getProject(this.selectedId);
        });
    }

}