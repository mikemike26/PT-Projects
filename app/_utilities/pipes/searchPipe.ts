import {Pipe} from '@angular/core';
import * as _ from 'lodash';

@Pipe ({
    name: "search"
})

export class SearchPipe {

    transform(items: any[], args: any[]) {
        let prop = args[1],
            input = args[0];

        return _.filter(items, (item) => {
            return item[prop].match(new RegExp(input));
        });
    };

}