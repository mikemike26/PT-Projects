import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AppNavService {

    // Observable for menu behavior
    private navCloseSource = new Subject<boolean>();

    // Observable string streams
    navClose$ = this.navCloseSource.asObservable();

    // Service message commands
    navClose(navClose: boolean) {
        this.navCloseSource.next(navClose);
    }
}