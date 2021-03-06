import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'pt-text-input',
    template: `
       <label class="pt-label" [attr.for]="_name" [class.hide]="_ngModel.length === 0" [class.selected]="fieldSelected">{{_name}}</label>
       <input type="text" 
              class="pt-input" 
              [attr.placeholder]="_name" 
              [attr.id]="_name" 
              [(ngModel)]="_ngModel" 
              (ngModelChange)="ngModelChange()"
              (blur)="blurField($event)"
              (click)="selectField()">
    `,
    styles: [`
        :host {
            display: inline-block;
            margin-bottom: 1em;
        }
        label, input{
            display: block;
        }
        label {
            color: #999999;
            font-weight: lighter;
            font-size: 0.8em;
            line-height: 1em;
        }
        label.selected {
            color: #3f51b5;
        }
        label.hide {
            visibility: hidden;
        }
        input {
            border: none;
            border-bottom: 1px solid #999999;
            background-color: transparent;
            font-size: 1.4em;
            width: 100%;
        }
        input:focus {
            outline: none;
            border-bottom: 1px solid #3f51b5;
        }
    `]
})

export class PtTextInputComponent {
    fieldSelected: boolean = false;
    _ngModel: any;
    _name: string;

    constructor() {

    }

    @Input()
    set output(output: any) {
        this._ngModel = output;
    }
    //set output in @input and call outputChange in @output
    @Output()
    outputChange: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    set name(name: string) {
        this._name = name;
    }

    @Output()
    blur: EventEmitter<string> = new EventEmitter<string>();

    ngModelChange() {
        this.outputChange.emit(this._ngModel);
    }

    selectField() {
        this.fieldSelected = true;
    }

    blurField(e) {
        this.fieldSelected = false;
        this.blur.emit(e)
    }


}