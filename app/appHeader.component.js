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
var AppHeader = (function () {
    function AppHeader() {
    }
    AppHeader = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: "\n      <header>\n        <h3>Project Time Site</h3>\n      </header>\n    ",
            styles: ['h3 {font-weight: normal; color: #ffffff; margin:0; padding: 0.6em 0 0 0; text-align:center;} header {background-color: #1DAAF1; height: 3em; border-bottom: 2px solid #e5e5e5;}']
        }), 
        __metadata('design:paramtypes', [])
    ], AppHeader);
    return AppHeader;
}());
exports.AppHeader = AppHeader;
//# sourceMappingURL=appHeader.component.js.map