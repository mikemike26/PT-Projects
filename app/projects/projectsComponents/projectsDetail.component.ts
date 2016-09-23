import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Project} from "../../_classes/project";
import {ProjectsService} from "../projectsServices/projects.service";
import {AppNavService} from "../../appServices/appNav.service";

@Component({
    selector: 'projects-detail',
    template: `
      <div class="detail-wrapper primary demo-card-wide mdl-card mdl-shadow--2dp" *ngIf="selectedId > -1">
        <div class="input-group">
            <pt-text-input class="input" id="title" name="Title" (keydown)="updateField($event, 'title')" (blur)="updateNow($event, 'title')" [(output)]="project.title"></pt-text-input>
            <pt-text-area class="input" id="description" name="Description" (keydown)="updateField($event, 'description')" (blur)="updateNow($event, 'description')" [(output)]="project.description"></pt-text-area>
        </div> 
        
        <div class="input-group">
          <pt-drop-down [options]="status" displayThis="status" [(output)]="selectedStatus"></pt-drop-down>
          {{status[selectedStatus].status}}
          
          <datepicker [(ngModel)]="startDate" [showWeeks]="true"></datepicker>
        </div>
      </div>
    `,
    styles: [`
        :host {
            display: block;
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

    //temp
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