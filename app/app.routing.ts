import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from "./overview/overview.component";
import { ActionsComponent } from './actions/actions.component';
import { PeopleComponent } from "./people/people.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ReportingComponent } from "./reporting/reporting.component";
import { TasksComponent } from "./tasks/tasks.component";
import { PageNotFoundComponent } from "./pageNotFound.component";

const appRoutes:Routes = [
    {
        path: '',
        component: OverviewComponent,
        data: {
            title: 'Overview'
        }
    },
    {
        path: 'overview',
        component: OverviewComponent,
        data: {
            title: 'Overview'
        }
    },
    {
        path: 'tasks',
        component: TasksComponent,
        data: {
            title: 'Taks'
        }
    },
    {
        path: 'actions',
        component: ActionsComponent,
        data: {
            title: 'Actions'
        }
    },
    {
        path: 'projects',
        component: ProjectsComponent,
        data: {
            title: 'Projects'
        }
    },
    {
        path: 'people',
        component: PeopleComponent,
        data: {
            title: 'People'
        }
    },
    {
        path: 'reporting',
        component: ReportingComponent,
        data: {
            title: 'Reporting'
        }
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        data: {
            title: 'Oops'
        }
    }
];

export const appRoutingProviders:any[] = [];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);