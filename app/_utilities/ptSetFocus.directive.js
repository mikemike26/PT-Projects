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
//allow you to set focus with a boolean
var PtSetFocusDirective = (function () {
    function PtSetFocusDirective(elementRef) {
        this.elementRef = elementRef;
    }
    PtSetFocusDirective.prototype.ngOnChanges = function (changes) {
        if (changes.hasFocus && changes.hasFocus.currentValue === true) {
            this.elementRef.nativeElement.focus();
            this.elementRef.nativeElement.select();
        }
    };
    __decorate([
        core_1.Input('ptSetFocus'), 
        __metadata('design:type', Boolean)
    ], PtSetFocusDirective.prototype, "hasFocus", void 0);
    PtSetFocusDirective = __decorate([
        core_1.Directive({
            selector: '[ptSetFocus]',
            host: {}
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], PtSetFocusDirective);
    return PtSetFocusDirective;
}());
exports.PtSetFocusDirective = PtSetFocusDirective;
//# sourceMappingURL=ptSetFocus.directive.js.map