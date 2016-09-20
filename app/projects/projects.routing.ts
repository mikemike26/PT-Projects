import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from "./projectsComponents/projects.component";
import {ProjectsDetailComponent} from "./projectsComponents/projectsDetail.component";
import {ProjectsResolve} from "./projectsServices/projectsResolve.service";
import {ProjectsNoSelectComponent} from "./projectsComponents/projectsNoSelectComponent";

const projectsRoutes:Routes = [
    {
        path: 'projects',
        component: ProjectsComponent,
        children: [
            {
                path: '',
                component: ProjectsNoSelectComponent
            },
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