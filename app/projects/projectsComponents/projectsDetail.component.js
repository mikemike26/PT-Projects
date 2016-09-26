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
    //===================================================
    function ProjectsDetailComponent(route, projectsService, appNavService) {
        this.route = route;
        this.projectsService = projectsService;
        this.appNavService = appNavService;
        this.hasUpdated = false;
        //temp =============================================
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
        this.endDate = new Date();
        this.selectedDepartment = 0;
        this.departments = [
            {
                id: 0,
                name: "isg"
            },
            {
                id: 1,
                name: "bpc"
            },
            {
                id: 2,
                name: "asg"
            }
        ];
        this.selectedMembers = [];
        this.selectedUser = 0;
        this.users = [
            {
                id: 0,
                name: "Mike Rensel"
            },
            {
                id: 1,
                name: "Michael Woods"
            },
            {
                id: 2,
                name: "Ron Mares"
            }
        ];
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
            template: "\n      <div class=\"detail-wrapper primary demo-card-wide mdl-card mdl-shadow--2dp\" *ngIf=\"selectedId > -1\">\n        <div class=\"input-group mdl-grid\">\n            <pt-text-input class=\"input mdl-cell mdl-cell--12-col\" id=\"title\" name=\"Title\" (keydown)=\"updateField($event, 'title')\" (blur)=\"updateNow($event, 'title')\" [(output)]=\"project.title\"></pt-text-input>\n        </div>\n        <div class=\"input-group mdl-grid\">\n            <pt-text-area class=\"input mdl-cell mdl-cell--12-col\" id=\"description\" name=\"Description\" (keydown)=\"updateField($event, 'description')\" (blur)=\"updateNow($event, 'description')\" [(output)]=\"project.description\"></pt-text-area>\n        </div> \n        \n        <div class=\"input-group mdl-grid\">\n          <pt-drop-down class=\"mdl-cell mdl-cell--4-col\" [options]=\"status\" displayThis=\"status\" name=\"Status\" [(output)]=\"selectedStatus\"></pt-drop-down>\n          <pt-date-picker class=\"mdl-cell mdl-cell--4-col\" [(date)]=\"startDate\" name=\"Start Date\"></pt-date-picker>\n          <pt-date-picker class=\"mdl-cell mdl-cell--4-col\" [(date)]=\"endDate\" name=\"End Date\"></pt-date-picker>\n        </div>\n        \n        <div class=\"input-group mdl-grid\">\n          <pt-drop-down class=\"mdl-cell mdl-cell--6-col\" [options]=\"users\" displayThis=\"name\" name=\"Owner\" [(output)]=\"selectedUser\"></pt-drop-down>\n          <pt-drop-down class=\"mdl-cell mdl-cell--6-col\" [options]=\"departments\" displayThis=\"name\" name=\"Department\" [(output)]=\"selectedDepartment\"></pt-drop-down>\n        </div>\n        \n        <div class=\"input-group mdl-grid\">\n          <pt-search-select-multi class=\"mdl-cell mdl-cell--12-col\" [options]=\"users\" name=\"Members\" displayThis=\"name\" [(output)]=\"selectedMembers\"></pt-search-select-multi>\n        </div>\n        \n      </div>\n    ",
            styles: ["\n        :host {\n            display: block;\n        }\n        .mdl-grid {\n            padding: 0;\n        }\n        .input-group {\n            width: 100%;\n        }\n        .detail-wrapper {\n            padding: 1em;\n            overflow: visible;\n        }\n        .detail-wrapper.primary {\n            width: 100%;\n        }\n        .primary .input {\n            display: block;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, projects_service_1.ProjectsService, appNav_service_1.AppNavService])
    ], ProjectsDetailComponent);
    return ProjectsDetailComponent;
}());
exports.ProjectsDetailComponent = ProjectsDetailComponent;
//# sourceMappingURL=projectsDetail.component.js.map