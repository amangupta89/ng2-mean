import {Component, OnInit} from '@angular/core';

import {Session} from '../../services/session';

@Component({
	selector: 'dashboard',
	templateUrl: '/components/dashboard/dashboard.html',
	providers: [Session]
})
export class Dashboard implements OnInit {
	constructor(private _session: Session) {
	}

	ngOnInit() {
		console.log('AppComponent inited');
	}

}