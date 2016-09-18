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
var router_1 = require('@angular/router');
var appNav_service_1 = require("../appNav.service");
var projects_service_1 = require("./projects.service");
var ProjectsListComponent = (function () {
    function ProjectsListComponent(router, appNavService, projectsService) {
        var _this = this;
        this.router = router;
        this.appNavService = appNavService;
        this.projectsService = projectsService;
        //we set the route params in our projectsService to bootstrap them up from the child
        this.sub1 = projectsService.projectParams$.subscribe(function (projectsParams) {
            _this.selectedId = +projectsParams.id;
        });
        //we want to bind to our projects model in case it changes from a different location
        this.sub2 = projectsService.projects$.subscribe(function (projects) {
            console.log(projects);
            _this.projects = projects;
        });
    }
    ProjectsListComponent.prototype.ngOnInit = function () {
        console.log("INIT!!");
        this.projectsService.fetchProjects();
    };
    ProjectsListComponent.prototype.selectProject = function (project) {
        this.appNavService.navClose(true);
        this.selectedId = project.id;
        this.router.navigate(['/projects/details', project.id]);
    };
    ProjectsListComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
    };
    ProjectsListComponent = __decorate([
        core_1.Component({
            selector: 'projects-list',
            template: "\n      <div class=\"demo-card-wide mdl-card mdl-shadow--2dp\" *ngFor=\"let project of projects\" (click)=\"selectProject(project)\" [class.selected]=\"selectedId === project.id\">\n          <div class=\"mdl-card__title\">\n            <h2 class=\"mdl-card__title-text\"><i class=\"material-icons\">&#xE8DF;</i> {{project.title}}</h2>\n          </div>\n          <div class=\"mdl-card__supporting-text\" [ptLimitWords]=\"project.description\" limit=\"20\"></div>\n      </div>\n    ",
            styles: ["\n        :host {\n            display: block;\n            position: absolute;\n            top: 8.3em;\n            bottom: 0;\n            overflow: auto;\n            padding: 0.7em 1em 1em 0;\n        }\n        .mdl-card {\n            margin-bottom: 1em;\n            min-height: 5em;\n            cursor: pointer;\n        }\n        .mdl-card__title {\n            padding-bottom: 0;\n        }\n        .mdl-card.selected {\n            box-shadow: 5px 6px 9px 0 rgba(0, 0, 0, .5);\n            position: relative;\n            bottom: .5em;\n                \n        }\n        .material-icons {\n            color: #6F6F6F;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.Router, appNav_service_1.AppNavService, projects_service_1.ProjectsService])
    ], ProjectsListComponent);
    return ProjectsListComponent;
}());
exports.ProjectsListComponent = ProjectsListComponent;
//# sourceMappingURL=projectsList.component.js.map