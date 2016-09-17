import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from "./projects.component";
import {ProjectsDetailComponent} from "./projectsDetail.component";

const projectsRoutes:Routes = [
    {
        path: 'projects',
        component: ProjectsComponent,
        children: [
            {
                path: 'details/:id',
                component: ProjectsDetailComponent
            }
        ]
    }
];

export const projectsRouting:ModuleWithProviders = RouterModule.forChild(projectsRoutes);