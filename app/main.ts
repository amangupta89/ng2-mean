import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, PathLocationStrategy, LocationStrategy} from 'angular2/router';
import {AppComponent} from './app';
import {Session} from './services/session';

bootstrap(AppComponent, [
		Session,
		HTTP_PROVIDERS,
		ROUTER_PROVIDERS,
		provide(LocationStrategy, {useClass: PathLocationStrategy})
	])
	.catch(err => console.error(err));