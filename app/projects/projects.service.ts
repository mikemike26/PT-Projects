import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Project} from "./_classes/project";
import {ProjectsData} from "../_models/projectsData";

@Injectable()
export class ProjectsService {
    private projects: Project[];

    constructor(private projectsData: ProjectsData) {

    }
    
    getProject(id) {
        return this.projects[id];
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

    // getch projects from our model
    fetchProjects() {
        this.projectsData.getProjects((data) => {
            this.projects = data;
            this.projectsObs.next(data);
        });
    }
    //=============================================================================================


}