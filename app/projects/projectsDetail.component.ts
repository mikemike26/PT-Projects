import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectsService} from "./projects.service";
import {AppNavService} from "../appNav.service";

@Component({
    selector: 'projects-detail',
    template: `
      <div class="detail-wrapper" *ngIf="selectedId > -1">
        <h1><i class="material-icons">&#xE8DF;</i> Projects Details</h1>
      </div>
    `,
    styles: [`
        :host {
            display: block;
        }
        
    `]
})

export class ProjectsDetailComponent {
    private sub: any;

    selectedId: number;

    constructor(private route: ActivatedRoute, private projectsService: ProjectsService, private appNavService: AppNavService) {

    }

    ngOnInit() {
        //on route change, set params in projectsServer so our parent component can make use of it
        this.sub = this.route.params.subscribe(params => {
            this.projectsService.setParams(params);

            this.selectedId = +params["id"];
            this.appNavService.navClose(this.selectedId > -1);
        });
    }

}