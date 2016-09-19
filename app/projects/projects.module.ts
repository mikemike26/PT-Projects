import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from '@angular/forms';
import {UtilitiesModule} from "../_utilities/utilities.module";
import {PtLimitWordsDirective} from "../_utilities/ptLimitWords.directive";
import {projectsRouting} from "./projects.routing";
import {ProjectsData} from "../_models/projectsData";
import {ProjectsService} from "./projectServices/projects.service";
import {ProjectsResolve} from "./projectServices/projectsResolve.service";
import {PtTextInputComponent} from "../_utilities/components/ptTextInput.component";
import {PtTextAreaComponent} from "../_utilities/components/ptTextArea.component";
import {ProjectsComponent} from "./projectComponents/projects.component";
import {ProjectsListComponent} from "./projectComponents/projectsList.component";
import {ProjectsDetailComponent} from "./projectComponents/projectsDetail.component";

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
        PtLimitWordsDirective,
        ProjectsDetailComponent,
        PtTextInputComponent,
        PtTextAreaComponent
    ],
    providers: [ProjectsData, ProjectsService, ProjectsResolve]
})
export class ProjectsModule {
}