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
var projects_service_1 = require("./projects.service");
var appNav_service_1 = require("../appNav.service");
var ProjectsDetailComponent = (function () {
    function ProjectsDetailComponent(route, projectsService, appNavService) {
        this.route = route;
        this.projectsService = projectsService;
        this.appNavService = appNavService;
    }
    ProjectsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appNavService.navClose(true);
        //on route change, set params in projectsServer so our parent component can make use of it
        this.sub = this.route.params.subscribe(function (params) {
            _this.projectsService.setParams(params);
            _this.selectedId = +params["id"];
        });
    };
    ProjectsDetailComponent = __decorate([
        core_1.Component({
            selector: 'projects-detail',
            template: "\n      <div class=\"detail-wrapper\" *ngIf=\"selectedId > -1\">\n        <h1><i class=\"material-icons\">&#xE8DF;</i> Projects Details</h1>\n      </div>\n    ",
            styles: ["\n        :host {\n            display: block;\n        }\n        \n    "]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, projects_service_1.ProjectsService, appNav_service_1.AppNavService])
    ], ProjectsDetailComponent);
    return ProjectsDetailComponent;
}());
exports.ProjectsDetailComponent = ProjectsDetailComponent;
//# sourceMappingURL=projectsDetail.component.js.map