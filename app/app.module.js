"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_routing_1 = require('./app.routing');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var actions_module_1 = require("./actions/actions.module");
var overview_module_1 = require("./overview/overview.module");
var people_module_1 = require("./people/people.module");
var projects_module_1 = require("./projects/projects.module");
var reporting_module_1 = require("./reporting/reporting.module");
var tasks_module_1 = require("./tasks/tasks.module");
var pageNotFound_component_1 = require("./pageNotFound.component");
var utilities_module_1 = require("./_utilities/utilities.module");
var appNav_component_1 = require("./appNav.component");
var appHeader_component_1 = require("./appHeader.component");
var appFooter_component_1 = require("./appFooter.component");
var http_1 = require('@angular/http');
var appNav_service_1 = require("./appNav.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_1.routing,
                actions_module_1.ActionsModule,
                overview_module_1.OverviewModule,
                people_module_1.PeopleModule,
                projects_module_1.ProjectsModule,
                reporting_module_1.ReportingModule,
                tasks_module_1.TasksModule,
                utilities_module_1.UtilitiesModule,
                http_1.HttpModule
            ],
            declarations: [
                appNav_component_1.AppNav,
                appHeader_component_1.AppHeader,
                appFooter_component_1.AppFooter,
                app_component_1.AppComponent,
                pageNotFound_component_1.PageNotFoundComponent
            ],
            providers: [
                app_routing_1.appRoutingProviders,
                appNav_service_1.AppNavService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map