System.register(['angular2/core', 'angular2/router', './directives/authenticated-router-outlet', './components/home/home', './components/login/login', './components/dashboard/dashboard'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, authenticated_router_outlet_1, home_1, login_1, dashboard_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (authenticated_router_outlet_1_1) {
                authenticated_router_outlet_1 = authenticated_router_outlet_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (dashboard_1_1) {
                dashboard_1 = dashboard_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: './app.html',
                        directives: [authenticated_router_outlet_1.AuthenticatedRouterOutlet]
                    }),
                    router_1.RouteConfig([
                        new router_1.Route({ path: '/', component: home_1.Home, name: 'Home', useAsDefault: true }),
                        new router_1.Route({ path: '/login', component: login_1.Login, name: 'Login' }),
                        new router_1.Route({ path: '/dashboard', component: dashboard_1.Dashboard, name: 'Dashboard' })
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.js.map