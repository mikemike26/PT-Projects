import { Component } from '@angular/core';

@Component({
    selector: 'app-nav',
    template: `
      <nav>
        <div class="nav-header">
           <img src="../assets/images/profile-placeholder.png" />
           <p class="user-name">Mike Rensel</p>
           <p class="user-email">mike.rensel@mktec.com</p>
        </div>
        <div class="nav-body">
            <a href routerLink="/overview" routerLinkActive="active"><i class="material-icons">&#xE905;</i> Overview</a>
            <a href routerLink="/tasks" routerLinkActive="active"><i class="material-icons">&#xE924;</i> Tasks</a>
            <a href routerLink="/actions" routerLinkActive="active"><i class="material-icons">&#xE160;</i> Actions</a>
            <a href routerLink="/projects" routerLinkActive="active"><i class="material-icons">&#xE8DF;</i> Projects</a>
            <a href routerLink="/people" routerLinkActive="active"><i class="material-icons">&#xE7FB;</i> People</a>
            <a href routerLink="/reporting" routerLinkActive="active"><i class="material-icons">&#xE6E1;</i> Reporting</a>
        </div>
      </nav>
    `,
    styles: [`
        nav { 
            width: 17em;
            height: 100%;
        }
        .nav-header {
            padding: 1em;
        }
        .nav-header {
            background-color: #1278BB; 
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
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
            padding: 0.3em 1em 0.6em 1em;
            white-space: nowrap;
        }
        a:active {
            background-color: #e6e7e6;
        }
        i {
            display: inline-block;
            margin-right: 1em;
        }
    `]
})

export class AppNav { }