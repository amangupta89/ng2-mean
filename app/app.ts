import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {BaseApp} from './app/base-app';

bootstrap(BaseApp, [HTTP_PROVIDERS, ROUTER_PROVIDERS])
	.catch(err => console.error(err));