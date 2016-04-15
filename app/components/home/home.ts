import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {Session} from '../../services/session';

@Component({
	selector: 'home',
	templateUrl: '/components/home/home.html',
	directives: [ROUTER_DIRECTIVES]
})
export class Home implements OnInit {
	constructor(private _session: Session) {
	}

	ngOnInit() {
	}
	doLogin() {
		this._session.login('testuser', 'testpassword');
	}
}