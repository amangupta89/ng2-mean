import {Component} from '@angular/core';
import {Session} from '../../services/session';

@Component({
	selector: 'login',
	templateUrl: '/components/login/login.html',
	providers: [Session]
})
export class Login {
	constructor(private _session: Session) {
		console.log('in the constructor');
	}

	doLogin(form: any) {
		// this._session.login(form.username, form.password);
	}
}