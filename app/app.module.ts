import {NgModule}      from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {ActionsModule} from "./actions/actions.module";
import {OverviewModule} from "./overview/overview.module";
import {PeopleModule} from "./people/people.module";
import {ProjectsModule} from "./projects/projects.module";
import {ReportingModule} from "./reporting/reporting.module";
import {TasksModule} from "./tasks/tasks.module";
import {PageNotFoundComponent} from "./pageNotFound.component";
import {UtilitiesModule} from "./_utilities/utilities.module";
import {AppNav} from "./appNav.component";
import {AppHeader} from "./appHeader.component";

@NgModule({
    imports: [
        BrowserModule,
        routing,
        ActionsModule,
        OverviewModule,
        PeopleModule,
        ProjectsModule,
        ReportingModule,
        TasksModule,
        UtilitiesModule
    ],
    declarations: [
        AppNav,
        AppHeader,
        AppComponent,
        PageNotFoundComponent
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule {
    
}