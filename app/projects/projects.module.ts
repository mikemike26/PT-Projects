import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { ProjectsComponent } from "./projects.component";
import {ProjectsListComponent} from "./projectsList.component";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        ProjectsComponent,
        ProjectsListComponent
    ],
    providers: []
})
export class ProjectsModule {
}