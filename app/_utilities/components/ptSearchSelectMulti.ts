import {Component, Input, Output, EventEmitter} from '@angular/core';
import {SearchPipe} from "../pipes/searchPipe";
import * as _ from 'lodash';

@Component({
    selector: 'pt-search-select-multi',
    template: `
       <label [class.selected]="selectInput" [class.invisible]="selectedOptions.length === 0 && searchInput.length === 0">{{name}}</label>
       <ul class="selected-items" [class.selected]="selectInput" (click)="selectInputField()">
          <li class="selected-item" *ngFor="let option of selectedOptions; let i = index" [class.selected]="existingIndex === i">
              <i class="material-icons" (click)="deleteThis(option)">&#xE5CD;</i> {{option[displayThis]}}
          </li>
          <li class="search">
              <input type="text" 
              class="search-input"
              [(ngModel)]="searchInput"
              (ngModelChange)="renderSearch()"
              (keydown)="listSelect($event)"
              (blur)="onBlur($event)"
              (click)="clickSearch()"
              [ptSetFocus]="selectInput"
              [attr.placeholder]="selectedOptions.length === 0 && searchInput.length === 0 ? name : ''">
          </li>
       </ul>
       <ul class="search-items" *ngIf="filteredOptions.length > 0">
          <li (mousedown)="clickToAdd(item)" 
              *ngFor="let item of filteredOptions; let i = index;" 
              [class.selected]="i === highlightOption">{{item[displayThis]}}</li>
       </ul>
    `,
    styles: [`
        :host {
            display: inline-block;
            margin-bottom: 1em;
            position: relative;
            height: 3.9em;
        }
        label {
            color: #999999;
            font-weight: lighter;
            font-size: 0.8em;
            line-height: 1em;
            margin-bottom: 0.8em;
            display: block;
        }
        label.selected {
            color: #3f51b5;
        }
        label.invisible {
            visibility: hidden;
        }
        .selected-items {
            border-bottom: 1px solid #999999;
            margin: 0;
            padding: 0;
            cursor: text;
            height: 2.4em;
        }
        .selected-items.selected {
            border-bottom: 1px solid #3f51b5;
        }
        .selected-items li {
            display: inline-block;
            vertical-align: bottom;
        }
        .selected-items li i {
            font-size: 1.2em;
            cursor: pointer;
        }
        .selected-items li.selected {
            background: #ff4081;
        }
        .selected-item {
            padding: 0.3em 0.6em;
            border-radius: 0.2em;
            background-color: #3f51b5;
            color: #ffffff;
            margin-right: 0.5em;
        }
        .search-items {
            background: white;
            border-radius: 2px;
            box-sizing: border-box;
            box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.20), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
            position: absolute;
            left: 0;
            right: 0;
            margin: 0;
            padding: 1em;
        }
        .search-items li {
            list-style-type: none;
            padding: 0.2em;
            border-radius: 0.2em;
            cursor: pointer;
        }
        .search-items li.selected {
            background: #3f51b5;
            color: white;
        }
        .search-input {
            border: none;
            padding-top: 0.5em;
        }
        .search-input:focus {
            outline: none;
        }
    `]
})

export class PtSearchSelectMultiComponent {
    private timer: any;

    placeHolder: string = "";
    selectInput: boolean = false;

    searchInput: string = "";
    selectedOptions: any[] = [];
    filteredOptions: any[] = [];

    existingIndex: number = -1;
    highlightOption: number = -1;

    //option list
    @Input()
    options: any[];

    //name of search box
    @Input()
    name: string;

    //what property to display
    @Input()
    displayThis: any;

    //output binding
    @Input()
    set output(index: any[]) {
        this.selectedOptions = index;
    }
    @Output()
    outputChange: EventEmitter<any[]> = new EventEmitter<any[]>();

    @Output()
    blur: EventEmitter<string> = new EventEmitter<string>();

    //steps list when up and down arrow keys are pressed
    private stepList(keyCode) {
        let index = this.highlightOption,
            filteredOptions = this.filteredOptions;

        //down arrow
        if(keyCode === 40) {
            this.highlightOption = index === filteredOptions.length-1 ? 0 : index+1;
        }else if(keyCode === 38) {
            this.highlightOption = index === 0 ? filteredOptions.length-1 : index-1;
        }
    }

    private isSelected(addItem) {
        let prop = this.displayThis;

        return _.find(this.selectedOptions, (item) => {
            return item[prop] === addItem[prop];
        });
    }

    private clearSearch() {
        this.searchInput = "";
        this.filteredOptions = [];
    }

    //if an option is already selected, blink selection
    private alreadySelected(selected) {
        let prop = this.displayThis;

        this.existingIndex = _.findIndex(this.selectedOptions, (item) => {
            return item[prop] === selected[prop];
        });

        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.existingIndex = -1;
        }, 1000);
    }

    //40 - down arrow
    //38 - up arrow
    //13 - enter
    //27 - esc
    //8 - delete
    listSelect(e) {
        let keyCode = e.keyCode;
        if(keyCode === 40 || keyCode === 38 || keyCode === 13) {
            e.preventDefault();
            if(keyCode === 13) {
                this.addItem(this.filteredOptions[this.highlightOption]);
            }else {
                this.stepList(keyCode);
            }
        }else if(keyCode === 27) {
            this.clearSearch();
        }else if(keyCode === 8) {
            let selectedOptions = this.selectedOptions;

            if(this.searchInput.length === 0 && selectedOptions.length > 0) {
                this.deleteThis(selectedOptions[selectedOptions.length-1]);
            }
        }
    }

    deleteThis(option) {
        let deleteIndex,
            prop = this.displayThis;

        deleteIndex = _.findIndex(this.selectedOptions, (item) => {
            return item[prop] === option[prop];
        });

        this.selectedOptions.splice(deleteIndex, 1);

        this.outputChange.emit(this.selectedOptions);
    }

    //call our pipe manually so we can set default selection
    renderSearch() {
        this.filteredOptions = new SearchPipe().transform(this.options, [this.searchInput, this.displayThis]);
        this.highlightOption = 0;
    }

    addItem(addItem) {
        if(addItem && !this.isSelected(addItem)) {
            this.selectedOptions.push(addItem);
            this.clearSearch();
            this.outputChange.emit(this.selectedOptions);
        }else {
            this.alreadySelected(addItem);
        }
    }

    clickToAdd(item) {
        this.addItem(item);
    }

    clickSearch() {
        this.selectInput = true;
    }

    selectInputField() {
        this.selectInput = true;
    }

    onBlur(e) {
        this.selectInput = false;
        this.clearSearch();

        this.blur.emit(e);
    }

    ngOnDestroy() {
        clearTimeout(this.timer);
    }
}