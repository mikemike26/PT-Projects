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
var Subject_1 = require('rxjs/Subject');
var _ = require('lodash');
var projectsData_1 = require("../../_models/projectsData");
var ProjectsService = (function () {
    function ProjectsService(projectsData) {
        this.projectsData = projectsData;
        //=========================== Projects route param observer ===================================
        // Observable string sources
        this.projectsParams = new Subject_1.Subject();
        // Observable string streams
        this.projectParams$ = this.projectsParams.asObservable();
        //=========================== Projects data observer ===================================
        // Observable string sources
        this.projectsObs = new Subject_1.Subject();
        // Observable string streams
        this.projects$ = this.projectsObs.asObservable();
    }
    ProjectsService.prototype.getProject = function (id) {
        return _.find(this.projects, { id: id });
    };
    ProjectsService.prototype.getProjects = function () {
        return this.projects;
    };
    ProjectsService.prototype.numberOfProjects = function () {
        return this.projects.length;
    };
    // Service message commands
    ProjectsService.prototype.setParams = function (projectsParams) {
        this.projectsParams.next(projectsParams);
    };
    // get projects from our model
    ProjectsService.prototype.setProjects = function (projects) {
        this.projects = projects;
        this.projectsObs.next(projects);
    };
    ProjectsService.prototype.fetchProjects = function () {
        var _this = this;
        this.projectsData.getProjects().then(function (projects) {
            if (projects) {
                _this.setProjects(projects);
            }
        });
    };
    ProjectsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [projectsData_1.ProjectsData])
    ], ProjectsService);
    return ProjectsService;
}());
exports.ProjectsService = ProjectsService;
//# sourceMappingURL=projects.service.js.map