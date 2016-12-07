HttpInterceptor = Package[ 'stijndepestel:http-interceptor' ].HttpInterceptor;
HttpInterceptor.registerInterceptor('https://www.googleapis.com', Meteor.absoluteUrl('fake.www.googleapis.com'));
HttpInterceptor.registerInterceptor('https://accounts.google.com', Meteor.absoluteUrl('fake.accounts.google.com'));

Picker.route('/fake.accounts.google.com/o/oauth2/auth', function (params, req, res) {
  res.writeHead(301, {
    'Location': params.query.redirect_uri +
    '?code=a1b2c3d4e5f6g7h8i9j0' + '&state=' + params.query.state
  });
  res.end();
});

Picker.route('/fake.accounts.google.com/o/oauth2/token', function (params, req, res) {
  respondWith(res, {
    'access_token': 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0',
    'expires_in': '1000',
    'scope': 'user:email'
  });
});

Picker.route('/fake.www.googleapis.com/oauth2/v1/userinfo', function (params, req, res) {
  respondWith(res, {
    'login': 'go_fake',
    'id': 1234567,
    'name': 'Google Fake',
    'email': 'google-fake@example.com'
  });
});

Picker.route('/fake.www.googleapis.com/oauth2/v1/tokeninfo', function (params, req, res) {
  respondWith(res, { scope: 'profile' });
});

function respondWith(res, json) {
  res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });
  res.end(JSON.stringify(json));
}