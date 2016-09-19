import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from '@angular/forms';
import {UtilitiesModule} from "../_utilities/utilities.module";
import {PtLimitWordsDirective} from "../_utilities/ptLimitWords.directive";
import {projectsRouting} from "./projects.routing";
import {ProjectsData} from "../_models/projectsData";
import {ProjectsComponent} from "./components/projects.component";
import {ProjectsListComponent} from "./components/projectsList.component";
import {ProjectsDetailComponent} from "./components/projectsDetail.component";
import {ProjectsService} from "./services/projects.service";
import {ProjectsResolve} from "./services/projectsResolve.service";
import {PtTextInputComponent} from "../_utilities/components/ptTextInput.component";
import {PtTextAreaComponent} from "../_utilities/components/ptTextArea.component";

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