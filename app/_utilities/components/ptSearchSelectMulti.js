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
var PtSearchSelectMultiComponent = (function () {
    function PtSearchSelectMultiComponent() {
        this.selectedOptions = [];
        this.outputChange = new core_1.EventEmitter();
    }
    Object.defineProperty(PtSearchSelectMultiComponent.prototype, "output", {
        set: function (index) {
            this.selectedOptions = index;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PtSearchSelectMultiComponent.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PtSearchSelectMultiComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PtSearchSelectMultiComponent.prototype, "displayThis", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], PtSearchSelectMultiComponent.prototype, "output", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PtSearchSelectMultiComponent.prototype, "outputChange", void 0);
    PtSearchSelectMultiComponent = __decorate([
        core_1.Component({
            selector: 'pt-search-select-multi',
            template: "\n       <label>{{name}}</label>\n       <ul class=\"selected-items\">\n          <li *ngFor=\"let option of selectedOptions\">{{option[displayThis]}}</li>\n          <li class=\"search\">\n              <input type=\"text\" \n              class=\"pt-input\"\n              [(ngModel)]=\"searchInput\">\n          </li>\n       </ul>\n       <ul class=\"search-items\">\n          <li *ngFor=\"let item of options | search:[searchInput, displayThis]\">{{item[displayThis]}}</li>\n       </ul>\n    ",
            styles: ["\n        :host {\n            display: inline-block;\n            margin-bottom: 1em;\n            position: relative;\n            height: 3.9em;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], PtSearchSelectMultiComponent);
    return PtSearchSelectMultiComponent;
}());
exports.PtSearchSelectMultiComponent = PtSearchSelectMultiComponent;
//# sourceMappingURL=ptSearchSelectMulti.js.map