import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'pt-text-input',
    template: `
       <label class="pt-label" [attr.for]="_name">{{_name}}</label>
       <input type="text" class="pt-input" [attr.placeholder]="_placeHolder" [attr.id]="_name" [(ngModel)]="_ngModel" (ngModelChange)="ngModelChange()">
    `,
    styles: [`
        :host {
            display: block;
        }
    `]
})

export class PtTextInputComponent {
    _placeHolder: string;
    _ngModel: any;
    _name: string;

    constructor() {

    }

    @Input()
    set placeHolder(placeHolder: string) {
        this._placeHolder = placeHolder;
        console.log(placeHolder);
    }

    @Input()
    set output(output: any) {
        this._ngModel = output;
        console.log(output);
    }
    @Output()
    outputChange: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    set name(name: string) {
        this._name = name;
        console.log(name);
    }

    ngModelChange() {
        this.outputChange.emit(this._ngModel);
    }


}