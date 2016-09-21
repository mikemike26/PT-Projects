import {Component} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {AppNavService} from "../appServices/appNav.service";
import {UserData} from "../_models/userData";
import {GlobalService} from "../appServices/global.service";

@Component({
    selector: 'app-nav',
    template: `
      <nav [class.closed]="menuClosed">
        <div class="nav-header">
           <button class="collapse-btn material-btn" (click)="menuToggle()">
               <i class="material-icons" [class.hide-element]="menuClosed">&#xE5C4;</i>
               <i class="material-icons" [class.hide-element]="!menuClosed">&#xE5C8;</i>
           </button>
           <div class="user-wrapper" [hidden]="menuClosed" *ngIf="user !== null">
               <img [src]="user.image" />
               <p class="user-name">{{user.first}} {{user.last}}</p>
               <p class="user-email">{{user.email}}</p>
           </div>
        </div>
        <div class="nav-body">
            <div class="nav-group">
                <a href routerLink="/overview" routerLinkActive="active"><i class="material-icons">&#xE905;</i> Overview</a>
            </div>
            <div class="nav-group">
                <a href routerLink="/tasks" routerLinkActive="active"><i class="material-icons">&#xE877;</i> Tasks</a>
                <a href routerLink="/actions" routerLinkActive="active"><i class="material-icons">&#xE160;</i> Actions</a>
            </div>
            <div class="nav-group">
                <a href routerLink="/projects" routerLinkActive="active"><i class="material-icons">&#xE8DF;</i> Projects</a>
                <a href routerLink="/people" routerLinkActive="active"><i class="material-icons">&#xE7FB;</i> People</a>
                <a href routerLink="/reporting" routerLinkActive="active"><i class="material-icons">&#xE6E1;</i> Reporting</a>
            </div>
        </div>
      </nav>
    `,
    styles: [`
        :host {
            display: block;
            z-index: 50;
        }
        nav { 
            width: 17em;
            height: 100%;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.26);
        }
        nav.closed .material-icons {
            float: right;
        }
        .nav-header {
            padding: 1em;
            height: 8.5em;
        }
        .nav-header {
            background-color: #1278BB; 
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
            position: relative;
        } 
        .nav-body {
            padding-top: 1em;
        }
        .nav-group {
            margin-bottom: 1.5em;
        }
        .user-wrapper {
            position: absolute;
            bottom: 1em;  
        }
        img {
            width: 5em; 
            height: auto; 
            border-radius: 3em;
        } 
        p {
            color: #ffffff; 
            font-weight: lighter; 
            margin: 0;
        } 
        .user-email {
            font-weight: lighter;
            font-size: 0.8rem;
        }
        a {
            display: block;
            letter-spacing: 0.1px;
            padding: 0.3em 0 0.6em 1em;
            white-space: nowrap;
            position: relative;
            height: 1.8em;
        }
        a.active, a:active {
            background-color: #e6e7e6;
        }
        i {
            display: inline-block;
            margin-right: 1em;
            color: #6F6F6F;
        }
        .collapse-btn {
            position: absolute;
            top: 0.6em;
            right: -0.4em;
        }
        .collapse-btn i {
            color: #ffffff;
        }
    `]
})

export class AppNav {

    menuClosed:boolean = false;
    sub: Subscription;
    user: any = null;

    constructor(private appNavService: AppNavService, private userData: UserData, private globalService: GlobalService) {
        this.sub = appNavService.navClose$.subscribe(navClose => {
            this.menuClosed = navClose
        });
    }

    ngOnInit() {
        this.userData.getuser().then((user) => {
            this.globalService.setUser(user);
            this.user = user;
        });
    }

    menuToggle() {
        this.appNavService.navClose(!this.menuClosed);
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.sub.unsubscribe();
    }

}