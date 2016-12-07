Package.describe({
  name: "stijndepestel:google-fake",
  summary: "A fake for use in testing. Fakes the oauth calls amongst other APIs.",
  version: "0.0.5",
  git: "https://github.com/stijndepestel/meteor-google-fake",
  debugOnly: true
});

Package.on_use(function (api) {
  api.use('google@1.1.15', ['client', 'server']);
  api.use(['stijndepestel:http-interceptor@0.5.0'], ['server']);
  api.use(['meteorhacks:picker@1.0.3'], ['server']);
  api.add_files('oauth-fake-client.js', 'client');
  api.add_files('google-fake.js', [ 'server' ]);
});