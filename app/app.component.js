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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-main',
            template: "\n      <app-header></app-header>\n      \n      <app-nav></app-nav>\n      <div class=\"view-container\">\n         <router-outlet></router-outlet>\n      </div>\n      \n      \n      <app-footer></app-footer>\n      \n    ",
            styles: ["\n        app-nav {\n            position: absolute;\n            top: 0;\n            bottom: 2.7em;\n            left: 0;\n            z-index: 50;\n        }\n        .view-container {\n            position: absolute;\n            top: 3em;\n            left: 17em;\n            bottom: 2.7em;\n            right: 0;\n            background-color: #EEEEEE;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map