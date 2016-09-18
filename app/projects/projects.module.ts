import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {UtilitiesModule} from "../_utilities/utilities.module";
import {PtLimitWordsDirective} from "../_utilities/ptLimitWords.directive";
import {projectsRouting} from "./projects.routing";
import {ProjectsData} from "../_models/projectsData";
import {ProjectsComponent} from "./components/projects.component";
import {ProjectsListComponent} from "./components/projectsList.component";
import {ProjectsDetailComponent} from "./components/projectsDetail.component";
import {ProjectsService} from "./services/projects.service";
import {ProjectsResolve} from "./services/projectsResolve.service";

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