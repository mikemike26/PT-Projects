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
var searchPipe_1 = require("../pipes/searchPipe");
var _ = require('lodash');
var PtSearchSelectMultiComponent = (function () {
    function PtSearchSelectMultiComponent() {
        this.placeHolder = "";
        this.selectInput = false;
        this.searchInput = "";
        this.selectedOptions = [];
        this.filteredOptions = [];
        this.existingIndex = -1;
        this.highlightOption = -1;
        this.outputChange = new core_1.EventEmitter();
        this.blur = new core_1.EventEmitter();
    }
    Object.defineProperty(PtSearchSelectMultiComponent.prototype, "output", {
        //output binding
        set: function (index) {
            this.selectedOptions = index;
        },
        enumerable: true,
        configurable: true
    });
    //steps list when up and down arrow keys are pressed
    PtSearchSelectMultiComponent.prototype.stepList = function (keyCode) {
        var index = this.highlightOption, filteredOptions = this.filteredOptions;
        //down arrow
        if (keyCode === 40) {
            this.highlightOption = index === filteredOptions.length - 1 ? 0 : index + 1;
        }
        else if (keyCode === 38) {
            this.highlightOption = index === 0 ? filteredOptions.length - 1 : index - 1;
        }
    };
    PtSearchSelectMultiComponent.prototype.isSelected = function (addItem) {
        var prop = this.displayThis;
        return _.find(this.selectedOptions, function (item) {
            return item[prop] === addItem[prop];
        });
    };
    PtSearchSelectMultiComponent.prototype.clearSearch = function () {
        this.searchInput = "";
        this.filteredOptions = [];
    };
    //if an option is already selected, blink selection
    PtSearchSelectMultiComponent.prototype.alreadySelected = function (selected) {
        var _this = this;
        var prop = this.displayThis;
        this.existingIndex = _.findIndex(this.selectedOptions, function (item) {
            return item[prop] === selected[prop];
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
            _this.existingIndex = -1;
        }, 1000);
    };
    //40 - down arrow
    //38 - up arrow
    //13 - enter
    //27 - esc
    //8 - delete
    PtSearchSelectMultiComponent.prototype.listSelect = function (e) {
        var keyCode = e.keyCode;
        if (keyCode === 40 || keyCode === 38 || keyCode === 13) {
            e.preventDefault();
            if (keyCode === 13) {
                this.addItem(this.filteredOptions[this.highlightOption]);
            }
            else {
                this.stepList(keyCode);
            }
        }
        else if (keyCode === 27) {
            this.clearSearch();
        }
        else if (keyCode === 8) {
            var selectedOptions = this.selectedOptions;
            if (this.searchInput.length === 0 && selectedOptions.length > 0) {
                this.deleteThis(selectedOptions[selectedOptions.length - 1]);
            }
        }
    };
    PtSearchSelectMultiComponent.prototype.deleteThis = function (option) {
        var deleteIndex, prop = this.displayThis;
        deleteIndex = _.findIndex(this.selectedOptions, function (item) {
            return item[prop] === option[prop];
        });
        this.selectedOptions.splice(deleteIndex, 1);
        this.outputChange.emit(this.selectedOptions);
    };
    //call our pipe manually so we can set default selection
    PtSearchSelectMultiComponent.prototype.renderSearch = function () {
        this.filteredOptions = new searchPipe_1.SearchPipe().transform(this.options, [this.searchInput, this.displayThis]);
        this.highlightOption = 0;
    };
    PtSearchSelectMultiComponent.prototype.addItem = function (addItem) {
        if (addItem && !this.isSelected(addItem)) {
            this.selectedOptions.push(addItem);
            this.clearSearch();
            this.outputChange.emit(this.selectedOptions);
        }
        else {
            this.alreadySelected(addItem);
        }
    };
    PtSearchSelectMultiComponent.prototype.clickToAdd = function (item) {
        this.addItem(item);
    };
    PtSearchSelectMultiComponent.prototype.clickSearch = function () {
        this.selectInput = true;
    };
    PtSearchSelectMultiComponent.prototype.selectInputField = function () {
        this.selectInput = true;
    };
    PtSearchSelectMultiComponent.prototype.onBlur = function (e) {
        this.selectInput = false;
        this.clearSearch();
        this.blur.emit(e);
    };
    PtSearchSelectMultiComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.timer);
    };
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
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PtSearchSelectMultiComponent.prototype, "blur", void 0);
    PtSearchSelectMultiComponent = __decorate([
        core_1.Component({
            selector: 'pt-search-select-multi',
            template: "\n       <label [class.selected]=\"selectInput\" [class.invisible]=\"selectedOptions.length === 0 && searchInput.length === 0\">{{name}}</label>\n       <ul class=\"selected-items\" [class.selected]=\"selectInput\" (click)=\"selectInputField()\">\n          <li class=\"selected-item\" *ngFor=\"let option of selectedOptions; let i = index\" [class.selected]=\"existingIndex === i\">\n              <i class=\"material-icons\" (click)=\"deleteThis(option)\">&#xE5CD;</i> {{option[displayThis]}}\n          </li>\n          <li class=\"search\">\n              <input type=\"text\" \n              class=\"search-input\"\n              [(ngModel)]=\"searchInput\"\n              (ngModelChange)=\"renderSearch()\"\n              (keydown)=\"listSelect($event)\"\n              (blur)=\"onBlur($event)\"\n              (click)=\"clickSearch()\"\n              [ptSetFocus]=\"selectInput\"\n              [attr.placeholder]=\"selectedOptions.length === 0 && searchInput.length === 0 ? name : ''\">\n          </li>\n       </ul>\n       <ul class=\"search-items\" *ngIf=\"filteredOptions.length > 0\">\n          <li (mousedown)=\"clickToAdd(item)\" \n              *ngFor=\"let item of filteredOptions; let i = index;\" \n              [class.selected]=\"i === highlightOption\">{{item[displayThis]}}</li>\n       </ul>\n    ",
            styles: ["\n        :host {\n            display: inline-block;\n            margin-bottom: 1em;\n            position: relative;\n            height: 3.9em;\n        }\n        label {\n            color: #999999;\n            font-weight: lighter;\n            font-size: 0.8em;\n            line-height: 1em;\n            margin-bottom: 0.8em;\n            display: block;\n        }\n        label.selected {\n            color: #3f51b5;\n        }\n        label.invisible {\n            visibility: hidden;\n        }\n        .selected-items {\n            border-bottom: 1px solid #999999;\n            margin: 0;\n            padding: 0;\n            cursor: text;\n            height: 2.4em;\n        }\n        .selected-items.selected {\n            border-bottom: 1px solid #3f51b5;\n        }\n        .selected-items li {\n            display: inline-block;\n            vertical-align: bottom;\n        }\n        .selected-items li i {\n            font-size: 1.2em;\n            cursor: pointer;\n        }\n        .selected-items li.selected {\n            background: #ff4081;\n        }\n        .selected-item {\n            padding: 0.3em 0.6em;\n            border-radius: 0.2em;\n            background-color: #3f51b5;\n            color: #ffffff;\n            margin-right: 0.5em;\n        }\n        .search-items {\n            background: white;\n            border-radius: 2px;\n            box-sizing: border-box;\n            box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.20), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n            position: absolute;\n            left: 0;\n            right: 0;\n            margin: 0;\n            padding: 1em;\n        }\n        .search-items li {\n            list-style-type: none;\n            padding: 0.2em;\n            border-radius: 0.2em;\n            cursor: pointer;\n        }\n        .search-items li.selected {\n            background: #3f51b5;\n            color: white;\n        }\n        .search-input {\n            border: none;\n            padding-top: 0.5em;\n        }\n        .search-input:focus {\n            outline: none;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], PtSearchSelectMultiComponent);
    return PtSearchSelectMultiComponent;
}());
exports.PtSearchSelectMultiComponent = PtSearchSelectMultiComponent;
//# sourceMappingURL=ptSearchSelectMulti.js.map