import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from "./components/projects.component";
import {ProjectsDetailComponent} from "./components/projectsDetail.component";
import {ProjectsResolve} from "./services/projectsResolve.service";

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