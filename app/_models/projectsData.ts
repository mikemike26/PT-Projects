import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Project} from "../projects/_classes/project";
import {ProjectFactory} from "../projects/_classes/projectFactory";

@Injectable()
export class ProjectsData {
    private projectsUrl = "";

    private dummyProjects = [
        {
            id: 0,
            title: "Project 1",
            status: "Pending",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies rhoncus egestas. Proin a augue efficitur nulla porta gravida ut vitae est. Vestibulum tristique, felis vitae luctus placerat, erat turpis dignissim ante, at rhoncus lacus augue ac dui. Vivamus efficitur, mauris nec ornare sodales, erat erat congue neque, ut facilisis lectus lectus quis nisl. Aenean venenatis ipsum non lectus hendrerit facilisis. Aliquam erat volutpat. Sed semper vel tellus at sodales. In in mauris leo. Pellentesque id molestie sapien, non gravida metus.",
            startDate: "Thu Sep 15 2016 21:01:57 GMT-0400 (EDT)",
            endDate: "Thu Sep 25 2016 21:01:57 GMT-0400 (EDT)",
            members: ["Mike", "Ron", "Stefan"],
            owner: "Michael Woods",
            updatedBy: "",
            updatedWhen: "",
            tasks: ["task1","task2","task3","task4","task5"],
            issues: ["issue1","issue2","issue3","issue4","issue"],
            milestones: ["milestone1","milestone2","milestone3","milestone4"]
        },
        {
            id: 1,
            title: "Project 2",
            status: "Pending",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            startDate: "Thu Sep 15 2016 21:01:57 GMT-0400 (EDT)",
            endDate: "Thu Sep 25 2016 21:01:57 GMT-0400 (EDT)",
            tasks: ["task1","task2","task3","task4","task5"],
            members: ["Mike", "Ron", "Stefan"],
            owner: "Michael Woods",
            updatedBy: "",
            updatedWhen: "",
            issues: ["issue1","issue2","issue3","issue4","issue"],
            milestones: ["milestone1","milestone2","milestone3","milestone4"]
        }
    ];
    constructor(private http: Http) {

    }

    getProjects() {
        let dummyProjects = this.createProjects(this.dummyProjects);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(dummyProjects);
            }, 500);
        });

    }
    
    private createProjects(projects):Project[] {
        let output = [];
        
        for(let a=0, b=projects.length; a<b; a++) {
            output.push(ProjectFactory.createProject(projects[a]));
        }

        return output;
    }
}