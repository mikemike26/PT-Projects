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
var PtDatePickerComponent = (function () {
    function PtDatePickerComponent() {
        this.pickerVisible = false;
        this.dateChange = new core_1.EventEmitter();
    }
    PtDatePickerComponent.prototype.preventProp = function (e) {
        e.stopPropagation();
    };
    PtDatePickerComponent.prototype.dateChanged = function () {
        this.dateChange.emit(this.date);
        this.pickerVisible = false;
    };
    PtDatePickerComponent.prototype.showPicker = function () {
        this.pickerVisible = true;
    };
    PtDatePickerComponent.prototype.hidePicker = function () {
        this.pickerVisible = false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PtDatePickerComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Date)
    ], PtDatePickerComponent.prototype, "date", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PtDatePickerComponent.prototype, "dateChange", void 0);
    PtDatePickerComponent = __decorate([
        core_1.Component({
            selector: 'pt-date-picker',
            template: "\n      <label [class.selected]=\"pickerVisible\">{{name}}</label>\n      <div class=\"picked-date\" (click)=\"showPicker()\">{{date | date: 'dd/MM/yyyy'}}</div>\n      <div class=\"picker-wrapper\" *ngIf=\"pickerVisible\" (click)=\"hidePicker()\">\n        <datepicker [(ngModel)]=\"date\" (ngModelChange)=\"dateChanged()\" (click)=\"preventProp($event)\" [showWeeks]=\"true\"></datepicker>\n      </div>\n    ",
            styles: ["\n      :host {\n          display: block;\n          padding-bottom: 1em;\n      }\n      label {\n          color: #999999;\n          font-weight: lighter;\n          font-size: 0.8em;\n          line-height: 1em;\n          margin-bottom: 0.8em;\n          display: block;\n      }\n      label.selected {\n          color: #3f51b5;\n      }\n      .picked-date {\n          display: inline-block;\n          padding: 0.5em 1em 0.6em 1em;\n          z-index: 1;\n          background: white;\n          border-radius: 2px;\n          box-sizing: border-box;\n          box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.20), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n          cursor: pointer;\n      }\n      datepicker {\n          z-index: 50;\n          margin: 0 auto;\n          display: block;\n          width: 23em;\n          position: relative;\n          top: 14em;\n      }\n      .picker-wrapper {\n          position: fixed;\n          left: 0;\n          right: 0;\n          top: 0;\n          bottom: 0;\n          z-index: 100;\n          background-color: rgba(0,0,0,0.5);\n      }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], PtDatePickerComponent);
    return PtDatePickerComponent;
}());
exports.PtDatePickerComponent = PtDatePickerComponent;
//# sourceMappingURL=ptDatePicker.js.map