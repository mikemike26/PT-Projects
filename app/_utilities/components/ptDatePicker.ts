import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'pt-date-picker',
    template: `
      <label [class.selected]="pickerVisible">{{name}}</label>
      <div class="picked-date" (click)="showPicker()">{{date | date: 'dd/MM/yyyy'}}</div>
      <div class="picker-wrapper" *ngIf="pickerVisible" (click)="hidePicker()">
        <datepicker [(ngModel)]="date" (ngModelChange)="dateChanged()" (click)="preventProp($event)" [showWeeks]="true"></datepicker>
      </div>
    `,
    styles: [`
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
      .picked-date {
          display: inline-block;
          padding: 0.5em 1em 0.6em 1em;
          z-index: 1;
          background: white;
          border-radius: 2px;
          box-sizing: border-box;
          box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.20), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
          cursor: pointer;
      }
      datepicker {
          z-index: 50;
          margin: 0 auto;
          display: block;
          width: 23em;
          position: relative;
          top: 14em;
      }
      .picker-wrapper {
          position: fixed;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          z-index: 100;
          background-color: rgba(0,0,0,0.5);
      }
    `]
})

export class PtDatePickerComponent {
    pickerVisible: boolean = false;

    constructor() {

    }

    @Input()
    name: string;

    @Input()
    date: Date;

    @Output()
    dateChange: EventEmitter<Date> = new EventEmitter<Date>();

    preventProp(e) {
        e.stopPropagation();
    }

    dateChanged() {
        this.dateChange.emit(this.date);
        this.pickerVisible = false;
    }

    showPicker() {
        this.pickerVisible = true;
    }

    hidePicker() {
        this.pickerVisible = false;
    }


}