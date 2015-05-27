HttpInterceptor = Package['xolvio:http-interceptor'].HttpInterceptor;
HttpInterceptor.registerInterceptor('https://www.googleapis.com', Meteor.absoluteUrl('fake.www.googleapis.com'));
HttpInterceptor.registerInterceptor('https://accounts.google.com', Meteor.absoluteUrl('fake.accounts.google.com'));


Router.route('fake.accounts.google.com/o/oauth2/auth', function () {
  var parameters = _fixIronRouterBug(this.request.query);
  this.response.writeHead(301, {'Location': parameters.redirect_uri + '?code=a1b2c3d4e5f6g7h8i9j0' + '&state=' + parameters.state});
  this.response.end();
}, {where: 'server'});

Router.route('fake.accounts.google.com/o/oauth2/token', function () {
  var cannedResponse = {
    'access_token': 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0',
    'expires_in': '1000',
    'scope': 'user:email'
  };
  this.response.writeHead(200, {
    'Content-Type': 'application/json; charset=utf-8'
  });
  console.log('response about to end');
  this.response.end(JSON.stringify(cannedResponse));
  console.log('ended repsonse');
}, {where: 'server'});

Router.route('fake.www.googleapis.com/oauth2/v1/userinfo', function () {
  var cannedResponse = {
    'login': 'go_fake',
    'id': 1234567,
    'name': 'Google Fake',
    'email': 'google-fake@example.com'
  };
  this.response.writeHead(200, {
    'Content-Type': 'application/json; charset=utf-8'
  });
  this.response.end(JSON.stringify(cannedResponse));
}, {where: 'server'});


_fixIronRouterBug = function (query) {
  if (query.redirect_uri.indexOf('http:/') !== -1 && query.redirect_uri.indexOf('http://') === -1) {
    query.redirect_uri = query.redirect_uri.replace('http:/', 'http://')
  }
  return query;
};