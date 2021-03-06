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
var appNav_service_1 = require("../appServices/appNav.service");
var userData_1 = require("../_models/userData");
var global_service_1 = require("../appServices/global.service");
var AppNav = (function () {
    function AppNav(appNavService, userData, globalService) {
        var _this = this;
        this.appNavService = appNavService;
        this.userData = userData;
        this.globalService = globalService;
        this.menuClosed = false;
        this.user = null;
        this.sub = appNavService.navClose$.subscribe(function (navClose) {
            _this.menuClosed = navClose;
        });
    }
    AppNav.prototype.ngOnInit = function () {
        var _this = this;
        this.userData.getuser().then(function (user) {
            _this.globalService.setUser(user);
            _this.user = user;
        });
    };
    AppNav.prototype.menuToggle = function () {
        this.appNavService.navClose(!this.menuClosed);
    };
    AppNav.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.sub.unsubscribe();
    };
    AppNav = __decorate([
        core_1.Component({
            selector: 'app-nav',
            template: "\n      <nav [class.closed]=\"menuClosed\">\n        <div class=\"nav-header\">\n           <button class=\"collapse-btn material-btn\" (click)=\"menuToggle()\">\n               <i class=\"material-icons\" [class.hide-element]=\"menuClosed\">&#xE5C4;</i>\n               <i class=\"material-icons\" [class.hide-element]=\"!menuClosed\">&#xE5C8;</i>\n           </button>\n           <div class=\"user-wrapper\" [hidden]=\"menuClosed\" *ngIf=\"user !== null\">\n               <img [src]=\"user.image\" />\n               <p class=\"user-name\">{{user.first}} {{user.last}}</p>\n               <p class=\"user-email\">{{user.email}}</p>\n           </div>\n        </div>\n        <div class=\"nav-body\">\n            <div class=\"nav-group\">\n                <a href routerLink=\"/overview\" routerLinkActive=\"active\"><i class=\"material-icons\">&#xE905;</i> Overview</a>\n            </div>\n            <div class=\"nav-group\">\n                <a href routerLink=\"/tasks\" routerLinkActive=\"active\"><i class=\"material-icons\">&#xE877;</i> Tasks</a>\n                <a href routerLink=\"/actions\" routerLinkActive=\"active\"><i class=\"material-icons\">&#xE160;</i> Actions</a>\n            </div>\n            <div class=\"nav-group\">\n                <a href routerLink=\"/projects\" routerLinkActive=\"active\"><i class=\"material-icons\">&#xE8DF;</i> Projects</a>\n                <a href routerLink=\"/people\" routerLinkActive=\"active\"><i class=\"material-icons\">&#xE7FB;</i> People</a>\n                <a href routerLink=\"/reporting\" routerLinkActive=\"active\"><i class=\"material-icons\">&#xE6E1;</i> Reporting</a>\n            </div>\n        </div>\n      </nav>\n    ",
            styles: ["\n        :host {\n            display: block;\n            z-index: 50;\n        }\n        nav { \n            width: 17em;\n            height: 100%;\n            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.26);\n        }\n        nav.closed .material-icons {\n            float: right;\n        }\n        .nav-header {\n            padding: 1em;\n            height: 8.5em;\n        }\n        .nav-header {\n            background-color: #1278BB; \n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);\n            position: relative;\n        } \n        .nav-body {\n            padding-top: 1em;\n        }\n        .nav-group {\n            margin-bottom: 1.5em;\n        }\n        .user-wrapper {\n            position: absolute;\n            bottom: 1em;  \n        }\n        img {\n            width: 5em; \n            height: auto; \n            border-radius: 3em;\n        } \n        p {\n            color: #ffffff; \n            font-weight: lighter; \n            margin: 0;\n        } \n        .user-email {\n            font-weight: lighter;\n            font-size: 0.8rem;\n        }\n        a {\n            display: block;\n            letter-spacing: 0.1px;\n            padding: 0.3em 0 0.6em 1em;\n            white-space: nowrap;\n            position: relative;\n            height: 1.8em;\n        }\n        a.active, a:active {\n            background-color: #e6e7e6;\n        }\n        i {\n            display: inline-block;\n            margin-right: 1em;\n            color: #6F6F6F;\n        }\n        .collapse-btn {\n            position: absolute;\n            top: 0.6em;\n            right: -0.4em;\n        }\n        .collapse-btn i {\n            color: #ffffff;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [appNav_service_1.AppNavService, userData_1.UserData, global_service_1.GlobalService])
    ], AppNav);
    return AppNav;
}());
exports.AppNav = AppNav;
//# sourceMappingURL=appNav.component.js.map