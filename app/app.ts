import {Component} from 'angular2/core';
import {Router, Route, RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';

// import {AuthenticatedRouterOutlet} from './directives/authenticated-router-outlet';
import {Home} from './components/home/home';
import {Login} from './components/login/login';
import {Dashboard} from './components/dashboard/dashboard';

@Component({
	selector: 'my-app',
	templateUrl: './app.html',
	directives: [RouterOutlet]
})
@RouteConfig([
	new Route({ path: '/', component: Home, name: 'Home', useAsDefault:true }),
	new Route({ path: '/login', component: Login, name: 'Login' }),
	new Route({ path: '/dashboard', component: Dashboard, name: 'Dashboard' })
])
export class AppComponent{

}