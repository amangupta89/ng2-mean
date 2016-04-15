import {Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Session {
	private loggedIn: boolean = false;

	constructor(private _http:Http) {}

	login(username, password) {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this._http.post('/login', JSON.stringify({username, password}), {headers}).map((res: Response) => res.json()).subscribe(data => {
			console.log('data: ', data);
			this.loggedIn = data.success;
		});
	}

	isLoggedIn() {
		return this.loggedIn;
	}
}