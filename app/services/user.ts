import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';

@Injectable()
export class UserService {
	private baseUrl: string = "/api/users";

	constructor(private _http: Http) {}

	updateUser(user) {
		return this._http.put(this.baseUrl, user);
	}
}