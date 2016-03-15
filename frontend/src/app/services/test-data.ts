import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TestData {
	constructor(private http:Http) {}

	getTestData() {
		console.log('you have hit the getTestData function')
		return this.http.get('http://localhost:3000/api/test').map((res:Response) => res.json());
	}
}