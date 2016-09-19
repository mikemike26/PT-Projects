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
        this.fieldSelected = false;
        //set output in @input and call outputChange in @output
        this.outputChange = new core_1.EventEmitter();
        this.blur = new core_1.EventEmitter();
    }
    Object.defineProperty(PtTextInputComponent.prototype, "output", {
        set: function (output) {
            this._ngModel = output;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PtTextInputComponent.prototype, "name", {
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    PtTextInputComponent.prototype.ngModelChange = function () {
        this.outputChange.emit(this._ngModel);
    };
    PtTextInputComponent.prototype.selectField = function () {
        this.fieldSelected = true;
    };
    PtTextInputComponent.prototype.blurField = function (e) {
        this.fieldSelected = false;
        this.blur.emit(e);
    };
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
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PtTextInputComponent.prototype, "blur", void 0);
    PtTextInputComponent = __decorate([
        core_1.Component({
            selector: 'pt-text-input',
            template: "\n       <label class=\"pt-label\" [attr.for]=\"_name\" [class.hide]=\"_ngModel.length === 0\" [class.selected]=\"fieldSelected\">{{_name}}</label>\n       <input type=\"text\" \n              class=\"pt-input\" \n              [attr.placeholder]=\"_name\" \n              [attr.id]=\"_name\" \n              [(ngModel)]=\"_ngModel\" \n              (ngModelChange)=\"ngModelChange()\"\n              (blur)=\"blurField($event)\"\n              (click)=\"selectField()\">\n    ",
            styles: ["\n        :host {\n            display: inline-block;\n            margin-bottom: 1em;\n        }\n        label, input{\n            display: block;\n        }\n        label {\n            color: #999999;\n            font-weight: lighter;\n            font-size: 0.8em;\n            line-height: 1em;\n        }\n        label.selected {\n            color: #3f51b5;\n        }\n        label.hide {\n            visibility: hidden;\n        }\n        input {\n            border: none;\n            border-bottom: 1px solid #999999;\n            background-color: transparent;\n            font-size: 1.4em;\n            width: 100%;\n        }\n        input:focus {\n            outline: none;\n            border-bottom: 1px solid #3f51b5;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], PtTextInputComponent);
    return PtTextInputComponent;
}());
exports.PtTextInputComponent = PtTextInputComponent;
//# sourceMappingURL=ptTextInput.component.js.map