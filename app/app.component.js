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
var appNav_service_1 = require("./appNav.service");
var AppComponent = (function () {
    function AppComponent(appNavService) {
        var _this = this;
        this.appNavService = appNavService;
        this.navClosed = false;
        this.subscription = appNavService.navClose$.subscribe(function (navClose) {
            _this.navClosed = navClose;
        });
    }
    AppComponent.prototype.navClose = function (closed) {
        this.navClosed = closed;
    };
    AppComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-main',
            template: "\n      <app-header></app-header>\n      \n      <app-nav [class.close]=\"navClosed\"></app-nav>\n      <div class=\"view-container\" [class.close]=\"navClosed\">\n         <router-outlet></router-outlet>\n      </div>\n      \n      \n      <app-footer></app-footer>\n      \n    ",
            styles: ["\n        :host {\n            display: block;\n            height: 100%;\n            width: 100%;\n            overflow: hidden;\n            position: relative;\n        }\n        app-header {\n            position: fixed;\n            left: 0;\n            right: 0;\n            top: 0;\n        }\n        app-nav {\n            position: absolute;\n            top: 0;\n            bottom: 3.3em;\n            left: 0;\n        }\n        app-nav.close {\n            left: -13em;\n        }\n        .view-container {\n            padding: 0 1em;\n            position: absolute;\n            top: 3em;\n            left: 17em;\n            bottom: 3.2em;\n            right: -13em;\n            background-color: #EEEEEE;\n        }\n        .view-container.close {\n            left: 4em;\n            right: 0;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [appNav_service_1.AppNavService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map