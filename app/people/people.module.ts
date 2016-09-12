import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { PeopleComponent } from "./people.component";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        PeopleComponent
    ],
    providers: []
})
export class PeopleModule {
}