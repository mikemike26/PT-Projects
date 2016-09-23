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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require('@angular/forms');
var utilities_module_1 = require("../_utilities/utilities.module");
var ptLimitWords_directive_1 = require("../_utilities/ptLimitWords.directive");
var projects_routing_1 = require("./projects.routing");
var projectsData_1 = require("../_models/projectsData");
var projects_service_1 = require("./projectsServices/projects.service");
var projectsResolve_service_1 = require("./projectsServices/projectsResolve.service");
var ptTextInput_component_1 = require("../_utilities/components/ptTextInput.component");
var ptTextArea_component_1 = require("../_utilities/components/ptTextArea.component");
var projects_component_1 = require("./projectsComponents/projects.component");
var projectsList_component_1 = require("./projectsComponents/projectsList.component");
var projectsDetail_component_1 = require("./projectsComponents/projectsDetail.component");
var projectsNoSelectComponent_1 = require("./projectsComponents/projectsNoSelectComponent");
var ptDropDown_component_1 = require("../_utilities/components/ptDropDown.component");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var ProjectsModule = (function () {
    function ProjectsModule() {
    }
    ProjectsModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                utilities_module_1.UtilitiesModule,
                projects_routing_1.projectsRouting,
                forms_1.FormsModule,
                ng2_bootstrap_1.Ng2BootstrapModule
            ],
            declarations: [
                projects_component_1.ProjectsComponent,
                projectsList_component_1.ProjectsListComponent,
                ptLimitWords_directive_1.PtLimitWordsDirective,
                projectsDetail_component_1.ProjectsDetailComponent,
                ptTextInput_component_1.PtTextInputComponent,
                ptTextArea_component_1.PtTextAreaComponent,
                projectsNoSelectComponent_1.ProjectsNoSelectComponent,
                ptDropDown_component_1.PtDropDownComponent,
            ],
            providers: [projectsData_1.ProjectsData, projects_service_1.ProjectsService, projectsResolve_service_1.ProjectsResolve]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectsModule);
    return ProjectsModule;
}());
exports.ProjectsModule = ProjectsModule;
//# sourceMappingURL=projects.module.js.map