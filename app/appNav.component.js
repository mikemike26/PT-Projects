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
var AppNav = (function () {
    function AppNav() {
    }
    AppNav = __decorate([
        core_1.Component({
            selector: 'app-nav',
            template: "\n      <nav>\n        <div class=\"nav-header\">\n           <img src=\"../assets/images/profile-placeholder.png\" />\n           <p class=\"user-name\">Mike Rensel</p>\n           <p class=\"user-email\">mike.rensel@mktec.com</p>\n        </div>\n        <div class=\"nav-body\">\n            <a href routerLink=\"/overview\" routerLinkActive=\"active\"><i class=\"material-icons\">&#xE905;</i> Overview</a>\n            <a href routerLink=\"/tasks\" routerLinkActive=\"active\"><i class=\"material-icons\">&#xE924;</i> Tasks</a>\n            <a href routerLink=\"/actions\" routerLinkActive=\"active\"><i class=\"material-icons\">&#xE160;</i> Actions</a>\n            <a href routerLink=\"/projects\" routerLinkActive=\"active\"><i class=\"material-icons\">&#xE8DF;</i> Projects</a>\n            <a href routerLink=\"/people\" routerLinkActive=\"active\"><i class=\"material-icons\">&#xE7FB;</i> People</a>\n            <a href routerLink=\"/reporting\" routerLinkActive=\"active\"><i class=\"material-icons\">&#xE6E1;</i> Reporting</a>\n        </div>\n      </nav>\n    ",
            styles: ["\n        nav { \n            width: 17em;\n            height: 100%;\n        }\n        .nav-header {\n            padding: 1em;\n        }\n        .nav-header {\n            background-color: #1278BB; \n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);\n        } \n        img {\n            width: 5em; \n            height: auto; \n            border-radius: 3em;\n        } \n        p {\n            color: #ffffff; \n            font-weight: lighter; \n            margin: 0;\n        } \n        .user-email {\n            font-weight: lighter;\n            font-size: 0.8rem;\n        }\n        a {\n            display: block;\n            letter-spacing: 0.1px;\n            padding: 0.3em 1em 0.6em 1em;\n            white-space: nowrap;\n        }\n        a:active {\n            background-color: #e6e7e6;\n        }\n        i {\n            display: inline-block;\n            margin-right: 1em;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppNav);
    return AppNav;
}());
exports.AppNav = AppNav;
//# sourceMappingURL=appNav.component.js.map