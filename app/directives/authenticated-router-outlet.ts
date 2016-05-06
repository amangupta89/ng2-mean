import {Directive, ElementRef, DynamicComponentLoader, Attribute} from '@angular/core';
import {RouterOutlet, Router, ComponentInstruction} from '@angular/router-deprecated';

import {Session} from '../services/session';

@Directive({
	selector: 'router-outlet'
})
export class AuthenticatedRouterOutlet extends RouterOutlet {
	publicRoutes: string[];
	private parentRouter: Router;
	private session: Session;

	constructor(
		_elementRef: ElementRef,
		_loader: DynamicComponentLoader,
		_parentRouter: Router,
		@Attribute('name') nameAttr: string,
		_session: Session
	){
		super(_elementRef, _loader, _parentRouter, nameAttr);

		this.parentRouter = _parentRouter;
		this.session = _session;
		this.publicRoutes = [
			'', 'login', 'register'
		]
	}

	activate(instruction: ComponentInstruction) {
		if(this._canActivate(instruction.urlPath)) {
			return super.activate(instruction);
		}else {
			this.parentRouter.navigate(['Login']);
		}
	}

	_canActivate(url) {
		// console.log('loggedIn: ', this.session.isLoggedIn());
		// return this.publicRoutes.indexOf(url) !== -1 || this.session.isLoggedIn();
	}
}