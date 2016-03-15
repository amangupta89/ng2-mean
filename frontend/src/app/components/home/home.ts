import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

import {TestData} from '../../services/test-data';

@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css'],
  providers: [TestData],
  directives: [],
  pipes: []
})
export class Home {
	public data: Observable<any>;

	constructor(private testData:TestData) {}

	ngOnInit() {
		this.testData.getTestData().subscribe(
			data => { this.data = data; console.log('this.data: ', this.data);}
		);
	}

}
