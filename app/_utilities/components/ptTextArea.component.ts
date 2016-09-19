import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'pt-text-area',
    template: `
       <label class="pt-label" [attr.for]="_name" [class.hide]="_ngModel.length === 0" [class.selected]="fieldSelected">{{_name}}</label>
       <div class="text-area-wrapper">
           <textarea type="text" 
                  class="pt-input" 
                  [attr.placeholder]="_name" 
                  [attr.id]="_name" 
                  [(ngModel)]="_ngModel" 
                  (ngModelChange)="ngModelChange()"
                  (blur)="blurField($event)"
                  (click)="selectField()"></textarea>
           <div class="sizing-box">{{_ngModel}}</div>
       </div>
       
    `,
    styles: [`
        :host {
            display: inline-block;
            margin-bottom: 1em;
        }
        label, textarea{
            display: block;
        }
        label {
            color: #999999;
            font-weight: lighter;
            font-size: 0.8em;
        }
        label.selected {
            color: #3f51b5;
        }
        label.hide {
            visibility: hidden;
        }
        .text-area-wrapper {
            position: relative;
        }
        .sizing-box {
            visibility: hidden;
            white-space: pre-wrap;
            word-wrap: break-word;
            font-size: 1em;
            line-height: 1.3em;
            padding: 2px;
            text-rendering: auto;
            color: initial;
            letter-spacing: normal;
            word-spacing: normal;
            text-transform: none;
            text-indent: 0px;
            text-shadow: none;
            text-align: start;
            min-height: 3em;
        }
        textarea {
            border: none;
            border-bottom: 1px solid #999999;
            background-color: transparent;
            font-size: 1em;
            line-height: 1.3em;
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100%;
            resize: none;
        }
        textarea:focus {
            outline: none;
            border-bottom: 1px solid #3f51b5;
        }
    `]
})

export class PtTextAreaComponent {
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