# ng2-mean
MEAN stack using Angular 2

## Getting Started
To get started, run `npm install`, `bower install`, and then in your terminal run `gulp serve`. This will get the server running on port 3000 by default.

Passport-local is being used for authentication. I'm working on user management and authentication on the front end. Logging in works, but it's lost on a browser refresh. I need to work through persisting that.

I've also extended the built in Angular 2 Router Outlet to require authentication to go to certain routes. This works, but it won't work when returning an observable from a service that calls to the servers. It only works if you have a locally stored `loggedIn` variable that you manage.

## TODO
As I'm new to full stack development, I'm open to suggestions for authentication strategies. I like the simplicity of `passport-local`, but if there's a better way to do user authentication that allows to pass around information about the user and keep track of authentication I am open. The only way I've previously kept track of a user with `passport-local` is by appending the user object to the body of the document when the server returns the layout view, and then in the Angular app checking for that object. However, that seems a little janky, and if there's a better way to handle user management I'd love to hear and learn. Any input is welcome.