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
var AppHeader = (function () {
    function AppHeader(route, router) {
        router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
            }
        });
    }
    ;
    AppHeader = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: "\n      <header>\n        <h3>Project Time Site</h3>\n      </header>\n    ",
            styles: ["\n        :host {\n            display: block;\n            z-index: 40;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);\n        }\n        h3 {\n            font-weight: lighter; \n            color: #ffffff; \n            margin:0; \n            padding: 0.6em 0 0 0; \n            text-align:center;\n            font-size: 1.4em;\n            line-height: 1em;\n        } \n        header {\n            background-color: #1DAAF1; \n            height: 3em; \n        }\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], AppHeader);
    return AppHeader;
}());
exports.AppHeader = AppHeader;
//# sourceMappingURL=appHeader.component.js.map