import {Injectable} from '@angular/core';

@Injectable()
export class GlobalService {

    user: any;

    constructor() {

    }

    //we're eventually going to set the user as a result of logging in, this can remain fudged for now
    setUser(user: any) {
        this.user = user;
    }

}