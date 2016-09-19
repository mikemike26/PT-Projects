import {NgModule} from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './appComponents/app.component';
import {ActionsModule} from "./actions/actions.module";
import {OverviewModule} from "./overview/overview.module";
import {PeopleModule} from "./people/people.module";
import {ProjectsModule} from "./projects/projects.module";
import {ReportingModule} from "./reporting/reporting.module";
import {TasksModule} from "./tasks/tasks.module";
import {PageNotFoundComponent} from "./pageNotFound.component";
import {UtilitiesModule} from "./_utilities/utilities.module";
import {AppNav} from "./appComponents/appNav.component";
import {AppHeader} from "./appComponents/appHeader.component";
import {AppFooter} from "./appComponents/appFooter.component";
import { HttpModule } from '@angular/http';
import {AppNavService} from "./appServices/appNav.service";

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
        UtilitiesModule,
        HttpModule
    ],
    declarations: [
        AppNav,
        AppHeader,
        AppFooter,
        AppComponent,
        PageNotFoundComponent
    ],
    providers: [
        appRoutingProviders,
        AppNavService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    
}