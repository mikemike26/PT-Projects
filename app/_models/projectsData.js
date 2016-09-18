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
var http_1 = require('@angular/http');
var projectFactory_1 = require("../projects/_classes/projectFactory");
var ProjectsData = (function () {
    function ProjectsData(http) {
        this.http = http;
        this.projectsUrl = "";
        this.dummyProjects = [
            {
                id: 0,
                title: "Project 1",
                status: "Pending",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies rhoncus egestas. Proin a augue efficitur nulla porta gravida ut vitae est. Vestibulum tristique, felis vitae luctus placerat, erat turpis dignissim ante, at rhoncus lacus augue ac dui. Vivamus efficitur, mauris nec ornare sodales, erat erat congue neque, ut facilisis lectus lectus quis nisl. Aenean venenatis ipsum non lectus hendrerit facilisis. Aliquam erat volutpat. Sed semper vel tellus at sodales. In in mauris leo. Pellentesque id molestie sapien, non gravida metus.",
                startDate: "Thu Sep 15 2016 21:01:57 GMT-0400 (EDT)",
                endDate: "Thu Sep 25 2016 21:01:57 GMT-0400 (EDT)",
                members: ["Mike", "Ron", "Stefan"],
                owner: "Michael Woods",
                updatedBy: "",
                updatedWhen: "",
                tasks: ["task1", "task2", "task3", "task4", "task5"],
                issues: ["issue1", "issue2", "issue3", "issue4", "issue"],
                milestones: ["milestone1", "milestone2", "milestone3", "milestone4"]
            },
            {
                id: 1,
                title: "Project 2",
                status: "Pending",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                startDate: "Thu Sep 15 2016 21:01:57 GMT-0400 (EDT)",
                endDate: "Thu Sep 25 2016 21:01:57 GMT-0400 (EDT)",
                tasks: ["task1", "task2", "task3", "task4", "task5"],
                members: ["Mike", "Ron", "Stefan"],
                owner: "Michael Woods",
                updatedBy: "",
                updatedWhen: "",
                issues: ["issue1", "issue2", "issue3", "issue4", "issue"],
                milestones: ["milestone1", "milestone2", "milestone3", "milestone4"]
            }
        ];
    }
    ProjectsData.prototype.getProjects = function (callback) {
        var _this = this;
        setTimeout(function () {
            callback(_this.createProjects(_this.dummyProjects));
        }, 500);
    };
    ProjectsData.prototype.createProjects = function (projects) {
        var output = [];
        for (var a = 0, b = projects.length; a < b; a++) {
            output.push(projectFactory_1.ProjectFactory.createProject(projects[a]));
        }
        return output;
    };
    ProjectsData = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProjectsData);
    return ProjectsData;
}());
exports.ProjectsData = ProjectsData;
//# sourceMappingURL=projectsData.js.map