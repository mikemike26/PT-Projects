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
//directive that will shorten long blocks of text by number of words
var PtLimitWordsDirective = (function () {
    function PtLimitWordsDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    PtLimitWordsDirective.prototype.limitText = function () {
        var text = this._text, textArray = text.split(" "), output = [], count = 0, limit = this._limit;
        if (textArray.length > limit) {
            while (count < limit) {
                output.push(textArray[count]);
                count++;
            }
            return output.join(" ") + "...";
        }
        else {
            return text;
        }
    };
    Object.defineProperty(PtLimitWordsDirective.prototype, "ptLimitWords", {
        set: function (words) {
            this._text = words;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PtLimitWordsDirective.prototype, "limit", {
        set: function (limit) {
            this._limit = limit;
        },
        enumerable: true,
        configurable: true
    });
    PtLimitWordsDirective.prototype.ngAfterContentChecked = function () {
        this.renderer.setText(this.el.nativeElement, this.limitText());
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], PtLimitWordsDirective.prototype, "ptLimitWords", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], PtLimitWordsDirective.prototype, "limit", null);
    PtLimitWordsDirective = __decorate([
        core_1.Directive({
            selector: '[ptLimitWords]',
            host: {}
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], PtLimitWordsDirective);
    return PtLimitWordsDirective;
}());
exports.PtLimitWordsDirective = PtLimitWordsDirective;
//# sourceMappingURL=ptLimitWords.directive.js.map