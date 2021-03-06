import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {ROUTER_PROVIDERS, PathLocationStrategy, LocationStrategy} from 'angular2/router';
import {AppComponent} from './app';
import {Session} from './services/session';
import {AppConfig} from './services/config';
import {AuthHttp, AuthConfig} from 'angular2-jwt';

bootstrap(AppComponent, [
		Session,
		AppConfig,
		HTTP_PROVIDERS,
		ROUTER_PROVIDERS,
		provide(LocationStrategy, {useClass: PathLocationStrategy}),
		provide(AuthHttp, {
			useFactory: (http) => {
				return new AuthHttp(new AuthConfig(), http);
			},
			deps: [Http]
		})
	])
	.catch(err => console.error(err));