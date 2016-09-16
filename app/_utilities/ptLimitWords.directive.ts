import {Directive, ElementRef, Input, Renderer} from '@angular/core';

//directive that will shorten long blocks of text by number of words

@Directive({
    selector: '[ptLimitWords]',
    host: {}
})
export class PtLimitWordsDirective {
    private _text: String;
    private _limit: Number;

    private limitText() {
        let text = this._text,
            textArray: String[] = text.split(" "),
            output: String[] = [],
            count = 0,
            limit = this._limit;
        if(textArray.length > limit) {
            while(count < limit) {
                output.push(textArray[count]);
                count++;
            }

            return output.join(" ")+"...";
        }else {
            return text;
        }

    }
    
    constructor(private el: ElementRef, private renderer: Renderer) {

    }

    @Input()
    set ptLimitWords(words: any) {
        this._text = words;
    }

    @Input()
    set limit(limit: Number) {
        this._limit = limit;
    }

    ngAfterContentChecked() {
        this.renderer.setText(this.el.nativeElement, this.limitText());
    }

}

