import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Project} from "../../_classes/project";
import {ProjectsService} from "../projectsServices/projects.service";
import {AppNavService} from "../../appServices/appNav.service";

@Component({
    selector: 'projects-detail',
    template: `
      <div class="detail-wrapper primary demo-card-wide mdl-card mdl-shadow--2dp" *ngIf="selectedId > -1">
        <div class="input-group mdl-grid">
            <pt-text-input class="input mdl-cell mdl-cell--12-col" id="title" name="Title" (keydown)="updateField($event, 'title')" (blur)="updateNow($event, 'title')" [(output)]="project.title"></pt-text-input>
        </div>
        <div class="input-group mdl-grid">
            <pt-text-area class="input mdl-cell mdl-cell--12-col" id="description" name="Description" (keydown)="updateField($event, 'description')" (blur)="updateNow($event, 'description')" [(output)]="project.description"></pt-text-area>
        </div> 
        
        <div class="input-group mdl-grid">
          <pt-drop-down class="mdl-cell mdl-cell--4-col" [options]="status" displayThis="status" name="Status" [(output)]="selectedStatus"></pt-drop-down>
          <pt-date-picker class="mdl-cell mdl-cell--4-col" [(date)]="startDate" name="Start Date"></pt-date-picker>
          <pt-date-picker class="mdl-cell mdl-cell--4-col" [(date)]="endDate" name="End Date"></pt-date-picker>
        </div>
        
        <div class="input-group mdl-grid">
          <pt-drop-down class="mdl-cell mdl-cell--6-col" [options]="users" displayThis="name" name="Owner" [(output)]="selectedUser"></pt-drop-down>
          <pt-drop-down class="mdl-cell mdl-cell--6-col" [options]="departments" displayThis="name" name="Department" [(output)]="selectedDepartment"></pt-drop-down>
        </div>
        
        <div class="input-group mdl-grid">
          <pt-search-select-multi class="mdl-cell mdl-cell--12-col" [options]="users" name="Members" displayThis="name" [(output)]="selectedMembers"></pt-search-select-multi>
        </div>
        
      </div>
    `,
    styles: [`
        :host {
            display: block;
        }
        .mdl-grid {
            padding: 0;
        }
        .input-group {
            width: 100%;
        }
        .detail-wrapper {
            padding: 1em;
            overflow: visible;
        }
        .detail-wrapper.primary {
            width: 100%;
        }
        .primary .input {
            display: block;
        }
    `]
})

export class ProjectsDetailComponent {
    private hasUpdated: boolean = false;
    private sub: any;
    private timer: any;

    selectedId: number;
    project: Project;

    //temp =============================================
    selectedStatus: number = 0;
    status: any[] = [
        {
            id: 0,
            status: "pending"
        },
        {
            id: 1,
            status: "incomplete"
        },
        {
            id: 2,
            status: "complete"
        }
    ];

    startDate = new Date();
    endDate = new Date();

    selectedDepartment: number = 0;
    departments: any[] = [
        {
            id: 0,
            name: "isg"
        },
        {
            id: 1,
            name: "bpc"
        },
        {
            id: 2,
            name: "asg"
        }
    ];

    selectedMembers: any[] = [];
    selectedUser: number = 0;
    users: any[] = [
        {
            id: 0,
            name: "Mike Rensel"
        },
        {
            id: 1,
            name: "Michael Woods"
        },
        {
            id: 2,
            name: "Ron Mares"
        }
    ];
    //===================================================

    constructor(private route:ActivatedRoute,
                private projectsService:ProjectsService,
                private appNavService:AppNavService) {

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

    //debounced update
    updateField(e, field) {
        this.hasUpdated = false;

        //keycode 9 === tab
        if(e.keyCode !== 9) {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.hasUpdated = true;

                console.log("SENDING "+ field.toUpperCase());
            }, 500);
        }
    }

    //immediate update
    updateNow(e, field) {
        if(!this.hasUpdated) {
            clearTimeout(this.timer);
            console.log("SENDING NOW!! "+ field.toUpperCase());
        }
    }

}