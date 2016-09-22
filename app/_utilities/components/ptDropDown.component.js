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
var PtDropDownComponent = (function () {
    function PtDropDownComponent() {
        this.listOpen = false;
        this.items = [];
        this.selectedIndex = -1;
        this.displayKey = "no_selection";
        this.outputChange = new core_1.EventEmitter();
    }
    PtDropDownComponent.prototype.ngOnInit = function () {
        console.log("INIT!");
        console.log(this.items);
        console.log(this.selectedIndex);
        console.log(this.displayKey);
    };
    Object.defineProperty(PtDropDownComponent.prototype, "options", {
        set: function (options) {
            this.items = options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PtDropDownComponent.prototype, "output", {
        set: function (index) {
            this.selectedIndex = index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PtDropDownComponent.prototype, "displayThis", {
        set: function (key) {
            this.displayKey = key;
        },
        enumerable: true,
        configurable: true
    });
    PtDropDownComponent.prototype.showMenu = function () {
        this.listOpen = !this.listOpen;
    };
    PtDropDownComponent.prototype.selectItem = function (index) {
        this.selectedIndex = index;
        this.listOpen = false;
        this.outputChange.emit(index);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], PtDropDownComponent.prototype, "options", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], PtDropDownComponent.prototype, "output", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PtDropDownComponent.prototype, "outputChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], PtDropDownComponent.prototype, "displayThis", null);
    PtDropDownComponent = __decorate([
        core_1.Component({
            selector: 'pt-drop-down',
            template: "\n       <div class=\"drop-down-wrapper\">\n           <div class=\"selection\" (click)=\"showMenu()\" [class.selected]=\"listOpen\">\n               <span *ngIf=\"displayKey !== 'no_selection'\">{{items[selectedIndex][displayKey]}}</span>\n               <span *ngIf=\"displayKey === 'no_selection'\">{{items[selectedIndex]}}</span>\n               <i class=\"material-icons\" *ngIf=\"!listOpen\">&#xE5C5;</i>\n               <i class=\"material-icons\" *ngIf=\"listOpen\">&#xE5C7;</i>\n           </div>\n           <ul class=\"selection-list\" *ngIf=\"listOpen\">\n              <li class=\"selection-item\" *ngFor=\"let item of items; let i = index;\" (click)=\"selectItem(i)\">\n                <span *ngIf=\"displayKey !== 'no_selection'\">{{item[displayKey]}}</span>\n                <span *ngIf=\"displayKey === 'no_selection'\">{{item}}</span>\n              </li>\n           </ul>\n       </div>\n       \n    ",
            styles: ["\n        :host {\n            display: inline-block;\n            margin-bottom: 1em;\n            position: relative;\n            height: 2.4em;\n            width: 9.8em;\n        }\n        .drop-down-wrapper {\n            z-index: 1;\n            background: white;\n            border-radius: 2px;\n            box-sizing: border-box;\n            box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.20), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n            position: absolute;\n        }\n        .selection {\n            \n            min-width: 7.8em;\n            position: relative;\n        }\n        .selection.selected {\n            border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n        }\n        .selection, .selection-item {\n            padding: 0.5em 1em 0.6em 1em;\n            cursor: pointer;\n        }\n        .selection i {\n            position: absolute;\n            right: 0.4em;\n            top: 0.3em;\n        }\n        .selection-list {\n            padding: 0;\n        }\n        .selection-list, .selection-list li{\n            list-style-type: none;\n            margin: 0;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], PtDropDownComponent);
    return PtDropDownComponent;
}());
exports.PtDropDownComponent = PtDropDownComponent;
//# sourceMappingURL=ptDropDown.component.js.map