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
var projects_service_1 = require("../projectsServices/projects.service");
var ProjectsComponent = (function () {
    function ProjectsComponent(projectsService) {
        this.projectsService = projectsService;
        this.deleteConfirm = false;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.numberOfProjects = this.projectsService.numberOfProjects();
    };
    ProjectsComponent.prototype.deletePrompt = function () {
        this.deleteConfirm = true;
    };
    ProjectsComponent.prototype.deleteProject = function () {
        this.deleteConfirm = false;
    };
    ProjectsComponent = __decorate([
        core_1.Component({
            selector: 'projects',
            template: "\n      <h1><i class=\"material-icons\">&#xE8DF;</i> Projects</h1>\n      <div *ngIf=\"!deleteConfirm\">\n          <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\">New Project</button>\n          <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\" *ngIf=\"numberOfProjects > 0\" (click)=\"deletePrompt()\">Delete Project</button>\n      </div>\n      <div *ngIf=\"deleteConfirm\">\n          <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\" (click)=\"deleteProject()\">Cancel</button>\n          <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--accent\" (click)=\"deleteProject()\">Are you sure?</button>\n      </div>\n      <projects-list></projects-list>\n      <div class=\"projects-view\"> \n          <router-outlet></router-outlet>\n      </div>\n    ",
            styles: ["\n        :host {\n            display: block;\n            width: 100%;\n            height: 100%;\n            position: relative;\n        }\n        h1 {\n            width: 10.7em;\n        }\n        .material-icons {\n            color: #666666;\n        }\n        .projects-view {\n            position: absolute;\n            left: 24.5em;\n            top: 0;\n            right: 0;\n            bottom: 0;\n            padding: 1em;\n            overflow: auto;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [projects_service_1.ProjectsService])
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;
//# sourceMappingURL=projects.component.js.map