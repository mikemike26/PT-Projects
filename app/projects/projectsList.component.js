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
var projectsData_1 = require("../_models/projectsData");
var router_1 = require('@angular/router');
var appNav_service_1 = require("../appNav.service");
var ProjectsListComponent = (function () {
    function ProjectsListComponent(projectsData, router, appNavService) {
        this.projectsData = projectsData;
        this.router = router;
        this.appNavService = appNavService;
    }
    ProjectsListComponent.prototype.ngOnInit = function () {
        this.projects = this.projectsData.getProjects();
        // console.log(this.projects);
    };
    ProjectsListComponent.prototype.selectProject = function (project) {
        // console.log(project);
        this.appNavService.navClose(true);
        this.router.navigate(['/projects/details', project.id]);
    };
    ProjectsListComponent = __decorate([
        core_1.Component({
            selector: 'projects-list',
            template: "\n      <div class=\"demo-card-wide mdl-card mdl-shadow--2dp\" *ngFor=\"let project of projects\" (click)=\"selectProject(project)\">\n          <div class=\"mdl-card__title\">\n            <h2 class=\"mdl-card__title-text\"><i class=\"material-icons\">&#xE8DF;</i> {{project.title}}</h2>\n          </div>\n          <div class=\"mdl-card__supporting-text\" [ptLimitWords]=\"project.description\" limit=\"20\"></div>\n      </div>\n    ",
            styles: ["\n        :host {\n            display: block;\n            position: absolute;\n            top: 7.3em;\n            bottom: 1.5em;\n            overflow: auto;\n            padding: 0.7em 0 1em 0;\n        }\n        .mdl-card {\n            margin-bottom: 1em;\n            min-height: 5em;\n            cursor: pointer;\n        }\n        .material-icons {\n            color: #6F6F6F;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [projectsData_1.ProjectsData, router_1.Router, appNav_service_1.AppNavService])
    ], ProjectsListComponent);
    return ProjectsListComponent;
}());
exports.ProjectsListComponent = ProjectsListComponent;
//# sourceMappingURL=projectsList.component.js.map