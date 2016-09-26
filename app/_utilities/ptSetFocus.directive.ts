import {Directive, ElementRef, Input} from '@angular/core';

//allow you to set focus with a boolean

@Directive({
    selector: '[ptSetFocus]',
    host: {}
})
export class PtSetFocusDirective {
    @Input('ptSetFocus') hasFocus: boolean;
    constructor(private elementRef: ElementRef) {}

    ngOnChanges(changes) {
        if(changes.hasFocus && changes.hasFocus.currentValue === true) {
            this.elementRef.nativeElement.focus();
            this.elementRef.nativeElement.select();
        }
    }
}

