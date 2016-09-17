import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ProjectsService {

    // Observable string sources
    private projectsParams = new Subject<any>();

    // Observable string streams
    projectParams$ = this.projectsParams.asObservable();

    // Service message commands
    setParams(projectsParams: any) {
        this.projectsParams.next(projectsParams);
    }
}