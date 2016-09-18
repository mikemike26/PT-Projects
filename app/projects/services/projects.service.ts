import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import * as _ from 'lodash';
import {Project} from "../../_classes/project";
import {ProjectsData} from "../../_models/projectsData";

@Injectable()
export class ProjectsService {
    private projects: Project[];

    constructor(private projectsData: ProjectsData) {

    }
    
    getProject(id) {
        return _.find(this.projects, {id: id});
    }
    
    getProjects() {
        return this.projects;
    }
    
    numberOfProjects() {
        return this.projects.length;
    }
    
    //=========================== Projects route param observer ===================================
    // Observable string sources
    private projectsParams = new Subject<any>();

    // Observable string streams
    projectParams$ = this.projectsParams.asObservable();

    // Service message commands
    setParams(projectsParams: any) {
        this.projectsParams.next(projectsParams);
    }
    
    //=========================== Projects data observer ===================================
    // Observable string sources
    private projectsObs  = new Subject<Project[]>();

    // Observable string streams
    projects$ = this.projectsObs.asObservable();

    // get projects from our model
    setProjects(projects) {
        this.projects = projects;
        this.projectsObs.next(projects);
    }

    fetchProjects() {
        this.projectsData.getProjects().then(projects => {
            if (projects) {
                this.setProjects(projects);
            }
        });
    }
    //=============================================================================================


}