"use strict";
var router_1 = require('@angular/router');
var appRoutes = [
    {
        path: 'crisis-center',
        component: CrisisCenterComponent
    },
    {
        path: 'heroes',
        component: HeroListComponent,
        data: {
            title: 'Heroes List'
        }
    },
    {
        path: 'hero/:id',
        component: HeroDetailComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map