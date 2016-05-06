import {Component, OnInit} from '@angular/core';
import {Router, Routes, ROUTER_DIRECTIVES} from '@angular/router';

// import {AuthenticatedRouterOutlet} from './directives/authenticated-router-outlet';
import {Home} from './components/home/home';
import {Login} from './components/login/login';
import {Dashboard} from './components/dashboard/dashboard';

@Component({
	// moduleId: module.id,
	selector: 'my-app',
	templateUrl: './app.html',
	directives: [ROUTER_DIRECTIVES]
})
@Routes([
	{ path: '/', component: Home },
	{ path: '/login', component: Login },
	{ path: '/dashboard', component: Dashboard },
	{ path: '*', component: Home }
])
export class AppComponent implements OnInit {
	ngOnInit() {
		console.log('AppComponent inited');
	}
}