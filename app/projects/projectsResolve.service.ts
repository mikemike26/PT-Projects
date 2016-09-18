import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Project} from "./_classes/project";
import {ProjectsService} from "./projects.service";
import {ProjectsData} from "../_models/projectsData";

@Injectable()
export class ProjectsResolve implements Resolve<Project> {

    constructor(private projectsService: ProjectsService, private projectsData: ProjectsData) {
        
    }

    resolve(): Promise<Project>|boolean {
        let ps = this.projectsService;

        return this.projectsData.getProjects().then(projects => {
            if (projects) {
                ps.setProjects(projects);
                return projects;
            }
        });
    }
}