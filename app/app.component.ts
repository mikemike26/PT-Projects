import { Component } from '@angular/core';
import {  } from '@angular/router';

@Component({
    selector: 'app-main',
    template: `
      <h1>My First Angular 2 App</h1>
    `
})

@RouteConfig([
    {path: '', name: '', component: null}
])
export class AppComponent { }