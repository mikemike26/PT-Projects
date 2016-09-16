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
var ProjectsListComponent = (function () {
    function ProjectsListComponent(projectsData) {
        this.projectsData = projectsData;
    }
    ProjectsListComponent.prototype.ngOnInit = function () {
        this.projects = this.projectsData.getProjects();
        // console.log(this.projects);
    };
    ProjectsListComponent = __decorate([
        core_1.Component({
            selector: 'projects-list',
            template: "\n      <div class=\"demo-card-wide mdl-card mdl-shadow--2dp\" *ngFor=\"let project of projects\">\n          <div class=\"mdl-card__title\">\n            <h2 class=\"mdl-card__title-text\">{{project.title}}</h2>\n          </div>\n          <div class=\"mdl-card__supporting-text\" [ptLimitWords]=\"project.description\" limit=\"20\"></div>\n      </div>\n    ",
            styles: ["\n        :host {\n            display: block;\n            position: absolute;\n            top: 7.3em;\n            bottom: 1.5em;\n            overflow: auto;\n            padding: 0.7em 0 1em 0;\n        }\n        .mdl-card {\n            margin-bottom: 1em;\n        }\n    "],
            providers: [projectsData_1.ProjectsData]
        }), 
        __metadata('design:paramtypes', [projectsData_1.ProjectsData])
    ], ProjectsListComponent);
    return ProjectsListComponent;
}());
exports.ProjectsListComponent = ProjectsListComponent;
//# sourceMappingURL=projectsList.component.js.map