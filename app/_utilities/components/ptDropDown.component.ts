import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'pt-drop-down',
    template: `
       <div class="drop-down-wrapper">
           <div class="selection" (click)="showMenu()" [class.selected]="listOpen">
               <span *ngIf="displayKey !== 'no_selection'">{{items[selectedIndex][displayKey]}}</span>
               <span *ngIf="displayKey === 'no_selection'">{{items[selectedIndex]}}</span>
               <i class="material-icons" *ngIf="!listOpen">&#xE5C5;</i>
               <i class="material-icons" *ngIf="listOpen">&#xE5C7;</i>
           </div>
           <ul class="selection-list" *ngIf="listOpen">
              <li class="selection-item" *ngFor="let item of items; let i = index;" (click)="selectItem(i)">
                <span *ngIf="displayKey !== 'no_selection'">{{item[displayKey]}}</span>
                <span *ngIf="displayKey === 'no_selection'">{{item}}</span>
              </li>
           </ul>
       </div>
       
    `,
    styles: [`
        :host {
            display: inline-block;
            margin-bottom: 1em;
            position: relative;
            height: 2.4em;
            width: 9.8em;
        }
        .drop-down-wrapper {
            z-index: 1;
            background: white;
            border-radius: 2px;
            box-sizing: border-box;
            box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.20), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
            position: absolute;
        }
        .selection {
            
            min-width: 7.8em;
            position: relative;
        }
        .selection.selected {
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        }
        .selection, .selection-item {
            padding: 0.5em 1em 0.6em 1em;
            cursor: pointer;
        }
        .selection i {
            position: absolute;
            right: 0.4em;
            top: 0.3em;
        }
        .selection-list {
            padding: 0;
        }
        .selection-list, .selection-list li{
            list-style-type: none;
            margin: 0;
        }
    `]
})

export class PtDropDownComponent {
    listOpen: boolean = false;
    items: any[] = [];
    selectedIndex: number = -1;
    displayKey: string = "no_selection";

    constructor() {

    }

    @Input()
    set options(options: any[]) {
        this.items = options;
    }

    @Input()
    set output(index: number) {
        this.selectedIndex = index;
    }
    @Output()
    outputChange: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    set displayThis(key: string) {
        this.displayKey = key;
    }

    showMenu() {
        this.listOpen = !this.listOpen;
    }

    selectItem(index) {
        this.selectedIndex = index;
        this.listOpen = false;
        this.outputChange.emit(index);
    }
}