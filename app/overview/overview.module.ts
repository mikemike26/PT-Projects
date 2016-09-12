import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { OverviewComponent } from "./overview.component";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        OverviewComponent
    ],
    providers: []
})
export class OverviewModule {
}