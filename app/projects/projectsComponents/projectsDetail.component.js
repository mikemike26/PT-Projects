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
var projects_service_1 = require("../projectsServices/projects.service");
var appNav_service_1 = require("../../appServices/appNav.service");
var ProjectsDetailComponent = (function () {
    function ProjectsDetailComponent(route, projectsService, appNavService) {
        this.route = route;
        this.projectsService = projectsService;
        this.appNavService = appNavService;
        this.hasUpdated = false;
        //temp
        this.selectedStatus = 0;
        this.status = [
            {
                id: 0,
                status: "pending"
            },
            {
                id: 1,
                status: "incomplete"
            },
            {
                id: 2,
                status: "complete"
            }
        ];
        this.startDate = new Date();
    }
    ProjectsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        //on route change, set params in projectsServer so our parent component can make use of it
        this.sub = this.route.params.subscribe(function (params) {
            _this.projectsService.setParams(params);
            _this.selectedId = +params["id"];
            _this.appNavService.navClose(_this.selectedId > -1);
            _this.project = _this.projectsService.getProject(_this.selectedId);
        });
    };
    //debounced update
    ProjectsDetailComponent.prototype.updateField = function (e, field) {
        var _this = this;
        this.hasUpdated = false;
        //keycode 9 === tab
        if (e.keyCode !== 9) {
            clearTimeout(this.timer);
            this.timer = setTimeout(function () {
                _this.hasUpdated = true;
                console.log("SENDING " + field.toUpperCase());
            }, 500);
        }
    };
    //immediate update
    ProjectsDetailComponent.prototype.updateNow = function (e, field) {
        if (!this.hasUpdated) {
            clearTimeout(this.timer);
            console.log("SENDING NOW!! " + field.toUpperCase());
        }
    };
    ProjectsDetailComponent = __decorate([
        core_1.Component({
            selector: 'projects-detail',
            template: "\n      <div class=\"detail-wrapper primary demo-card-wide mdl-card mdl-shadow--2dp\" *ngIf=\"selectedId > -1\">\n        <div class=\"input-group\">\n            <pt-text-input class=\"input\" id=\"title\" name=\"Title\" (keydown)=\"updateField($event, 'title')\" (blur)=\"updateNow($event, 'title')\" [(output)]=\"project.title\"></pt-text-input>\n            <pt-text-area class=\"input\" id=\"description\" name=\"Description\" (keydown)=\"updateField($event, 'description')\" (blur)=\"updateNow($event, 'description')\" [(output)]=\"project.description\"></pt-text-area>\n        </div> \n        \n        <div class=\"input-group\">\n          <pt-drop-down [options]=\"status\" displayThis=\"status\" name=\"Status\" [(output)]=\"selectedStatus\"></pt-drop-down>\n          {{status[selectedStatus].status}}\n          \n          <pt-date-picker [(date)]=\"startDate\"></pt-date-picker>\n          {{startDate}}\n        </div>\n      </div>\n    ",
            styles: ["\n        :host {\n            display: block;\n        }\n        .detail-wrapper {\n            padding: 1em;\n            overflow: visible;\n        }\n        .detail-wrapper.primary {\n            width: 100%;\n        }\n        .primary .input {\n            display: block;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, projects_service_1.ProjectsService, appNav_service_1.AppNavService])
    ], ProjectsDetailComponent);
    return ProjectsDetailComponent;
}());
exports.ProjectsDetailComponent = ProjectsDetailComponent;
//# sourceMappingURL=projectsDetail.component.js.map