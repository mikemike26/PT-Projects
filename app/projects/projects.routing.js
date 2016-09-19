"use strict";
var router_1 = require('@angular/router');
var projects_component_1 = require("./projectsComponents/projects.component");
var projectsDetail_component_1 = require("./projectsComponents/projectsDetail.component");
var projectsResolve_service_1 = require("./projectsServices/projectsResolve.service");
var projectsRoutes = [
    {
        path: 'projects',
        component: projects_component_1.ProjectsComponent,
        children: [
            {
                path: ':id',
                component: projectsDetail_component_1.ProjectsDetailComponent
            }
        ],
        resolve: {
            projects: projectsResolve_service_1.ProjectsResolve
        }
    }
];
exports.projectsRouting = router_1.RouterModule.forChild(projectsRoutes);
//# sourceMappingURL=projects.routing.js.map