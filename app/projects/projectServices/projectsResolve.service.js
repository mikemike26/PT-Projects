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
var projects_service_1 = require("./projects.service");
var projectsData_1 = require("../../_models/projectsData");
var ProjectsResolve = (function () {
    function ProjectsResolve(projectsService, projectsData) {
        this.projectsService = projectsService;
        this.projectsData = projectsData;
    }
    ProjectsResolve.prototype.resolve = function () {
        var ps = this.projectsService;
        return this.projectsData.getProjects().then(function (projects) {
            if (projects) {
                ps.setProjects(projects);
                return projects;
            }
        });
    };
    ProjectsResolve = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [projects_service_1.ProjectsService, projectsData_1.ProjectsData])
    ], ProjectsResolve);
    return ProjectsResolve;
}());
exports.ProjectsResolve = ProjectsResolve;
//# sourceMappingURL=projectsResolve.service.js.map