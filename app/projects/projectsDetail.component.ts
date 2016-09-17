import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectsService} from "./projects.service";

@Component({
    selector: 'projects-detail',
    template: `
      <h1><i class="material-icons">&#xE8DF;</i> Projects Details</h1>
      
    `,
    styles: [`
        :host {
            display: block;
        }
        
    `]
})

export class ProjectsDetailComponent {
    private sub: any;

    constructor(private route: ActivatedRoute, private projectsService: ProjectsService) {

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.projectsService.setParams(params);
        });
    }

}