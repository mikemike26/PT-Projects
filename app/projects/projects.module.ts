import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ProjectsComponent} from "./projects.component";
import {ProjectsListComponent} from "./projectsList.component";
import {UtilitiesModule} from "../_utilities/utilities.module";
import {PtLimitWordsDirective} from "../_utilities/ptLimitWords.directive";

@NgModule({
    imports: [
        BrowserModule,
        UtilitiesModule
    ],
    declarations: [
        ProjectsComponent,
        ProjectsListComponent,
        PtLimitWordsDirective
    ],
    providers: []
})
export class ProjectsModule {
}