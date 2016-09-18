import {Component, ElementRef, Input, Renderer} from '@angular/core';

@Component({
    selector: 'pt-text-input',
    template: `
       <label class="mdl-textfield__label" [attr.for]="_name">{{_name}}</label>
       <input type="text" class="mdl-textfield__input" [attr.id]="_name" [(ngModel)]="_ngModel">
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

    @Input()
    set name(name: string) {
        this._name = name;
        console.log(name);
    }
}