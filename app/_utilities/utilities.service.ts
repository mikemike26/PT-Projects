import {Injectable} from '@angular/core';

@Injectable()
export class UtilitiesService {

    constructor() {}

    //adapter method for the various new implementations of getting the key code on keydown or keyup events
    getKeyCode(event): number {
        let code;

        if (event.keyCode !== undefined) {
            code = event.keyCode;
        }else if (event.key !== undefined) {
            code = event.key;
        } else if (event.keyIdentifier !== undefined) {
            code = event.keyIdentifier;
        }
        return code
    }
}