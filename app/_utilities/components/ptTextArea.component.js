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
var PtTextAreaComponent = (function () {
    function PtTextAreaComponent() {
        this.fieldSelected = false;
        //set output in @input and call outputChange in @output
        this.outputChange = new core_1.EventEmitter();
        this.blur = new core_1.EventEmitter();
    }
    Object.defineProperty(PtTextAreaComponent.prototype, "output", {
        set: function (output) {
            this._ngModel = output;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PtTextAreaComponent.prototype, "name", {
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    PtTextAreaComponent.prototype.ngModelChange = function () {
        this.outputChange.emit(this._ngModel);
    };
    PtTextAreaComponent.prototype.selectField = function () {
        this.fieldSelected = true;
    };
    PtTextAreaComponent.prototype.blurField = function (e) {
        this.fieldSelected = false;
        this.blur.emit(e);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], PtTextAreaComponent.prototype, "output", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PtTextAreaComponent.prototype, "outputChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], PtTextAreaComponent.prototype, "name", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PtTextAreaComponent.prototype, "blur", void 0);
    PtTextAreaComponent = __decorate([
        core_1.Component({
            selector: 'pt-text-area',
            template: "\n       <label class=\"pt-label\" [attr.for]=\"_name\" [class.hide]=\"_ngModel.length === 0\" [class.selected]=\"fieldSelected\">{{_name}}</label>\n       <div class=\"text-area-wrapper\">\n           <textarea type=\"text\" \n                  class=\"pt-input\" \n                  [attr.placeholder]=\"_name\" \n                  [attr.id]=\"_name\" \n                  [(ngModel)]=\"_ngModel\" \n                  (ngModelChange)=\"ngModelChange()\"\n                  (blur)=\"blurField($event)\"\n                  (click)=\"selectField()\"></textarea>\n           <div class=\"sizing-box\">{{_ngModel}}</div>\n       </div>\n       \n    ",
            styles: ["\n        :host {\n            display: inline-block;\n            margin-bottom: 1em;\n        }\n        label, textarea{\n            display: block;\n        }\n        label {\n            color: #999999;\n            font-weight: lighter;\n            font-size: 0.8em;\n        }\n        label.selected {\n            color: #3f51b5;\n        }\n        label.hide {\n            visibility: hidden;\n        }\n        .text-area-wrapper {\n            position: relative;\n        }\n        .sizing-box {\n            visibility: hidden;\n            white-space: pre-wrap;\n            word-wrap: break-word;\n            font-size: 1em;\n            line-height: 1.3em;\n            padding: 2px;\n            text-rendering: auto;\n            color: initial;\n            letter-spacing: normal;\n            word-spacing: normal;\n            text-transform: none;\n            text-indent: 0px;\n            text-shadow: none;\n            text-align: start;\n            min-height: 3em;\n        }\n        textarea {\n            border: none;\n            border-bottom: 1px solid #999999;\n            background-color: transparent;\n            font-size: 1em;\n            line-height: 1.3em;\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            width: 100%;\n            resize: none;\n        }\n        textarea:focus {\n            outline: none;\n            border-bottom: 1px solid #3f51b5;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], PtTextAreaComponent);
    return PtTextAreaComponent;
}());
exports.PtTextAreaComponent = PtTextAreaComponent;
//# sourceMappingURL=ptTextArea.component.js.map