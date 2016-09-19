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
var AppFooter = (function () {
    function AppFooter() {
    }
    AppFooter = __decorate([
        core_1.Component({
            selector: 'app-footer',
            template: "\n      <footer>\n        <p>Market Technologies, Inc</p>\n      </footer>\n    ",
            styles: ["\n        :host {\n            display: block;\n            z-index: 40;\n        }    \n        p {\n            color: #ffffff; \n            text-align:center; \n            margin: 1em; \n            font-size: 0.8rem\n        } \n        footer {\n            background-color: #1278BB; \n            position: fixed; \n            bottom: 0; \n            left: 0; \n            right: 0; \n            border-top: 2px solid #e5e5e5;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppFooter);
    return AppFooter;
}());
exports.AppFooter = AppFooter;
//# sourceMappingURL=appFooter.component.js.map