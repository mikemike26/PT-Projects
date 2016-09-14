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
            template: "\n      <nav>\n        <a href routerLink=\"/overview\" routerLinkActive=\"active\">Overview</a>\n        <a href routerLink=\"/tasks\" routerLinkActive=\"active\">Tasks</a>\n        <a href routerLink=\"/actions\" routerLinkActive=\"active\">Actions</a>\n        <a href routerLink=\"/projects\" routerLinkActive=\"active\">Projects</a>\n        <a href routerLink=\"/people\" routerLinkActive=\"active\">People</a>\n        <a href routerLink=\"/reporting\" routerLinkActive=\"active\">Reporting</a>\n      </nav>\n    ",
            styles: [".nav-header {background-color: #1278BB;}"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppNav);
    return AppNav;
}());
exports.AppNav = AppNav;
//# sourceMappingURL=appNav.component.js.map