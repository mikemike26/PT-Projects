"use strict";
var router_1 = require('@angular/router');
var overview_component_1 = require("./overview/overview.component");
var actions_component_1 = require('./actions/actions.component');
var people_component_1 = require("./people/people.component");
var projects_component_1 = require("./projects/projects.component");
var reporting_component_1 = require("./reporting/reporting.component");
var tasks_component_1 = require("./tasks/tasks.component");
var pageNotFound_component_1 = require("./pageNotFound.component");
var appRoutes = [
    {
        path: '',
        component: overview_component_1.OverviewComponent,
        data: {
            title: 'Overview'
        }
    },
    {
        path: 'overview',
        component: overview_component_1.OverviewComponent,
        data: {
            title: 'Overview'
        }
    },
    {
        path: 'tasks',
        component: tasks_component_1.TasksComponent,
        data: {
            title: 'Taks'
        }
    },
    {
        path: 'actions',
        component: actions_component_1.ActionsComponent,
        data: {
            title: 'Actions'
        }
    },
    {
        path: 'projects',
        component: projects_component_1.ProjectsComponent,
        data: {
            title: 'Projects'
        }
    },
    {
        path: 'people',
        component: people_component_1.PeopleComponent,
        data: {
            title: 'People'
        }
    },
    {
        path: 'reporting',
        component: reporting_component_1.ReportingComponent,
        data: {
            title: 'Reporting'
        }
    },
    {
        path: '**',
        component: pageNotFound_component_1.PageNotFoundComponent,
        data: {
            title: 'Oops'
        }
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map