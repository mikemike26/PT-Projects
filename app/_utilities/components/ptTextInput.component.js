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
var PtTextInputComponent = (function () {
    function PtTextInputComponent() {
        this.outputChange = new core_1.EventEmitter();
    }
    Object.defineProperty(PtTextInputComponent.prototype, "placeHolder", {
        set: function (placeHolder) {
            this._placeHolder = placeHolder;
            console.log(placeHolder);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PtTextInputComponent.prototype, "output", {
        set: function (output) {
            this._ngModel = output;
            console.log(output);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PtTextInputComponent.prototype, "name", {
        set: function (name) {
            this._name = name;
            console.log(name);
        },
        enumerable: true,
        configurable: true
    });
    PtTextInputComponent.prototype.ngModelChange = function () {
        this.outputChange.emit(this._ngModel);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], PtTextInputComponent.prototype, "placeHolder", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], PtTextInputComponent.prototype, "output", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PtTextInputComponent.prototype, "outputChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], PtTextInputComponent.prototype, "name", null);
    PtTextInputComponent = __decorate([
        core_1.Component({
            selector: 'pt-text-input',
            template: "\n       <label class=\"pt-label\" [attr.for]=\"_name\">{{_name}}</label>\n       <input type=\"text\" class=\"pt-input\" [attr.placeholder]=\"_placeHolder\" [attr.id]=\"_name\" [(ngModel)]=\"_ngModel\" (ngModelChange)=\"ngModelChange()\">\n    ",
            styles: ["\n        :host {\n            display: block;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], PtTextInputComponent);
    return PtTextInputComponent;
}());
exports.PtTextInputComponent = PtTextInputComponent;
//# sourceMappingURL=ptTextInput.component.js.map