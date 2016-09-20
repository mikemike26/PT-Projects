"use strict";
var router_1 = require('@angular/router');
var overview_component_1 = require("./overview/overview.component");
var actions_component_1 = require('./actions/actions.component');
var people_component_1 = require("./people/people.component");
var reporting_component_1 = require("./reporting/reporting.component");
var tasks_component_1 = require("./tasks/tasks.component");
var pageNotFound_component_1 = require("./pageNotFound.component");
var appRoutes = [
    {
        path: '',
        component: overview_component_1.OverviewComponent
    },
    {
        path: 'overview',
        component: overview_component_1.OverviewComponent
    },
    {
        path: 'tasks',
        component: tasks_component_1.TasksComponent
    },
    {
        path: 'actions',
        component: actions_component_1.ActionsComponent
    },
    {
        path: 'people',
        component: people_component_1.PeopleComponent
    },
    {
        path: 'reporting',
        component: reporting_component_1.ReportingComponent
    },
    {
        path: '**',
        component: pageNotFound_component_1.PageNotFoundComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map