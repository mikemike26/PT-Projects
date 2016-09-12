import { Component } from '@angular/core';

@Component({
    selector: 'app-main',
    template: `
      <h1>My First Angular 2 App</h1>
      <nav>
        <a href routerLink="/overview" routerLinkActive="active">Overview</a>
        <a href routerLink="/tasks" routerLinkActive="active">Tasks</a>
        <a href routerLink="/actions" routerLinkActive="active">Actions</a>
        <a href routerLink="/projects" routerLinkActive="active">Projects</a>
        <a href routerLink="/people" routerLinkActive="active">People</a>
        <a href routerLink="/reporting" routerLinkActive="active">Reporting</a>
      </nav>
      <router-outlet></router-outlet>
    `
})

export class AppComponent { }