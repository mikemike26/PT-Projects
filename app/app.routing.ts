import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from "./overview/overview.component";
import { ActionsComponent } from './actions/actions.component';
import { PeopleComponent } from "./people/people.component";
import { ReportingComponent } from "./reporting/reporting.component";
import { TasksComponent } from "./tasks/tasks.component";
import { PageNotFoundComponent } from "./pageNotFound.component";

const appRoutes:Routes = [
    {
        path: '',
        component: OverviewComponent
    },
    {
        path: 'overview',
        component: OverviewComponent
    },
    {
        path: 'tasks',
        component: TasksComponent
    },
    {
        path: 'actions',
        component: ActionsComponent
    },
    {
        path: 'people',
        component: PeopleComponent
    },
    {
        path: 'reporting',
        component: ReportingComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

export const appRoutingProviders:any[] = [];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);