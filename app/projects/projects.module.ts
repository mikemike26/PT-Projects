import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from '@angular/forms';
import {UtilitiesModule} from "../_utilities/utilities.module";
import {projectsRouting} from "./projects.routing";
import {ProjectsData} from "../_models/projectsData";
import {ProjectsService} from "./projectsServices/projects.service";
import {ProjectsResolve} from "./projectsServices/projectsResolve.service";
import {ProjectsComponent} from "./projectsComponents/projects.component";
import {ProjectsListComponent} from "./projectsComponents/projectsList.component";
import {ProjectsDetailComponent} from "./projectsComponents/projectsDetail.component";
import {ProjectsNoSelectComponent} from "./projectsComponents/projectsNoSelectComponent";

@NgModule({
    imports: [
        BrowserModule,
        UtilitiesModule,
        projectsRouting,
        FormsModule
    ],
    declarations: [
        ProjectsComponent,
        ProjectsListComponent,
        ProjectsDetailComponent,
        ProjectsNoSelectComponent
    ],
    providers: [ProjectsData, ProjectsService, ProjectsResolve]
})
export class ProjectsModule {
}