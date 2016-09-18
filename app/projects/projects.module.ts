import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ProjectsComponent} from "./projects.component";
import {ProjectsListComponent} from "./projectsList.component";
import {UtilitiesModule} from "../_utilities/utilities.module";
import {PtLimitWordsDirective} from "../_utilities/ptLimitWords.directive";
import {projectsRouting} from "./projects.routing";
import {ProjectsDetailComponent} from "./projectsDetail.component";
import {ProjectsData} from "../_models/projectsData";
import {ProjectsService} from "./projects.service";
import {ProjectsResolve} from "./projectsResolve.service";

@NgModule({
    imports: [
        BrowserModule,
        UtilitiesModule,
        projectsRouting
    ],
    declarations: [
        ProjectsComponent,
        ProjectsListComponent,
        PtLimitWordsDirective,
        ProjectsDetailComponent
    ],
    providers: [ProjectsData, ProjectsService, ProjectsResolve]
})
export class ProjectsModule {
}