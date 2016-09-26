import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'pt-search-select-multi',
    template: `
       <label>{{name}}</label>
       <ul class="selected-items">
          <li *ngFor="let option of selectedOptions">{{option[displayThis]}}</li>
          <li class="search">
              <input type="text" 
              class="pt-input"
              [(ngModel)]="searchInput">
          </li>
       </ul>
       <ul class="search-items">
          <li *ngFor="let item of options | search:[searchInput, displayThis]">{{item[displayThis]}}</li>
       </ul>
    `,
    styles: [`
        :host {
            display: inline-block;
            margin-bottom: 1em;
            position: relative;
            height: 3.9em;
        }
    `]
})

export class PtSearchSelectMultiComponent {
    searchInput: string;
    selectedOptions: any[] = [];

    @Input()
    options: any[];

    @Input()
    name: string;

    @Input()
    displayThis: any;

    @Input()
    set output(index: any[]) {
        this.selectedOptions = index;
    }
    @Output()
    outputChange: EventEmitter<string> = new EventEmitter<string>();
}