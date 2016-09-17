"use strict";
var router_1 = require('@angular/router');
var projects_component_1 = require("./projects.component");
var projectsDetail_component_1 = require("./projectsDetail.component");
var projectsRoutes = [
    {
        path: 'projects',
        component: projects_component_1.ProjectsComponent,
        children: [
            {
                path: 'details/:id',
                component: projectsDetail_component_1.ProjectsDetailComponent
            }
        ]
    }
];
exports.projectsRouting = router_1.RouterModule.forChild(projectsRoutes);
//# sourceMappingURL=projects.routing.js.map