import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {UtilitiesService} from "./utilities.service";
import {PtDropDownComponent} from "./components/ptDropDown.component";
import {PtTextAreaComponent} from "./components/ptTextArea.component";
import {PtTextInputComponent} from "./components/ptTextInput.component";
import {PtLimitWordsDirective} from "./ptLimitWords.directive";
import {PtDatePickerComponent} from "./components/ptDatePicker";
import {Ng2BootstrapModule} from "ng2-bootstrap/ng2-bootstrap";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        Ng2BootstrapModule
    ],
    declarations: [
        PtDropDownComponent,
        PtTextAreaComponent,
        PtTextInputComponent,
        PtLimitWordsDirective,
        PtDatePickerComponent
    ],
    exports: [
        PtDropDownComponent,
        PtTextAreaComponent,
        PtTextInputComponent,
        PtLimitWordsDirective,
        PtDatePickerComponent
    ],
    providers: [UtilitiesService]
})
export class UtilitiesModule {
}