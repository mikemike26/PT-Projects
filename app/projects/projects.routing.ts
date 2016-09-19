import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from "./projectComponents/projects.component";
import {ProjectsDetailComponent} from "./projectComponents/projectsDetail.component";
import {ProjectsResolve} from "./projectServices/projectsResolve.service";

const projectsRoutes:Routes = [
    {
        path: 'projects',
        component: ProjectsComponent,
        children: [
            {
                path: ':id',
                component: ProjectsDetailComponent
            }
        ],
        resolve: {
            projects: ProjectsResolve
        }
    }
];

export const projectsRouting:ModuleWithProviders = RouterModule.forChild(projectsRoutes);