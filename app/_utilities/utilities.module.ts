import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {UtilitiesService} from "./utilities.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [],
    providers: [UtilitiesService]
})
export class UtilitiesModule {
}