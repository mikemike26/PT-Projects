import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Project} from "../_classes/project";
import {ProjectFactory} from "../_classes/projectFactory";

@Injectable()
export class UserData {
    private UserUrl = "";

    private dummyUser = [
        {
            id: 0,
            first: "Mike",
            last: "Rensel",
            email: "mike.rensel@mkte.com",
            image: "../assets/images/profile-placeholder.png",
            department: "isg",
            level: "0"
        }
    ];
    constructor(private http: Http) {

    }

    getProjects() {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.dummyUser);
            }, 500);
        });

    }


}