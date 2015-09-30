Package.describe({
  name: "emmerge:google-fake",
  summary: "A fake for use in testing. Fakes the oauth calls amongst other APIs.",
  version: "0.0.4_2",
  git: "https://github.com/emmerge/meteor-google-fake",
  debugOnly: true
});

Package.on_use(function (api) {
  api.use('google@1.1.5', ['client', 'server']);
  api.use(['xolvio:http-interceptor@0.5.1'], ['server']);
  api.use(['iron:router@1.0.9'], ['server']);
  api.add_files('oauth-fake-client.js', 'client');
  api.add_files('google-fake.js', ['server']);
});
