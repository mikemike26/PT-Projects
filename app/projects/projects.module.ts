import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from '@angular/forms';
import {UtilitiesModule} from "../_utilities/utilities.module";
import {PtLimitWordsDirective} from "../_utilities/ptLimitWords.directive";
import {projectsRouting} from "./projects.routing";
import {ProjectsData} from "../_models/projectsData";
import {ProjectsService} from "./projectsServices/projects.service";
import {ProjectsResolve} from "./projectsServices/projectsResolve.service";
import {PtTextInputComponent} from "../_utilities/components/ptTextInput.component";
import {PtTextAreaComponent} from "../_utilities/components/ptTextArea.component";
import {ProjectsComponent} from "./projectsComponents/projects.component";
import {ProjectsListComponent} from "./projectsComponents/projectsList.component";
import {ProjectsDetailComponent} from "./projectsComponents/projectsDetail.component";
import {ProjectsNoSelectComponent} from "./projectsComponents/projectsNoSelectComponent";
import {PtDropDownComponent} from "../_utilities/components/ptDropDown.component";
import {Ng2BootstrapModule} from "ng2-bootstrap/ng2-bootstrap";

@NgModule({
    imports: [
        BrowserModule,
        UtilitiesModule,
        projectsRouting,
        FormsModule,
        Ng2BootstrapModule
    ],
    declarations: [
        ProjectsComponent,
        ProjectsListComponent,
        PtLimitWordsDirective,
        ProjectsDetailComponent,
        PtTextInputComponent,
        PtTextAreaComponent,
        ProjectsNoSelectComponent,
        PtDropDownComponent,

    ],
    providers: [ProjectsData, ProjectsService, ProjectsResolve]
})
export class ProjectsModule {
}