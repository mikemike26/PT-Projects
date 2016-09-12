import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { TasksComponent } from "./tasks.component";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        TasksComponent
    ],
    providers: []
})
export class TasksModule {
}