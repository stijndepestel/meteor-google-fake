Meteor.startup(function () {
  Accounts.loginServiceConfiguration.upsert({
    service: 'google'
  }, {
    service: 'google',
    clientId: 'fakeClientId',
    secret: 'fakeSecret',
    loginStyle: 'popup'
  });
});

