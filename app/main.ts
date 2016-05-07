import {provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {AppComponent} from './app';
import {Session} from './services/session';
import {AppConfig} from './services/config';
import {AuthHttp, AuthConfig} from 'angular2-jwt';

bootstrap(AppComponent, [
		Session,
		AppConfig,
		HTTP_PROVIDERS,
		ROUTER_PROVIDERS,
		provide(LocationStrategy, {useClass: HashLocationStrategy}),
		provide(AuthHttp, {
			useFactory: (http) => {
				return new AuthHttp(new AuthConfig(), http);
			},
			deps: [Http]
		})
	])
	.catch(err => console.error(err));