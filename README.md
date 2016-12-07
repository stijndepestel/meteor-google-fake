# google-fake
A stub for use in testing Meteor apps. Stubs the oauth calls and allows you to fake stub more.

This fork uses the [meteorhacks:picker](https://github.com/meteorhacks/picker) router instead of the [iron:router](https://github.com/iron-meteor/iron-router). This makes it useable in combination with the [kadira:flow-router](https://github.com/kadirahq/flow-router).

## Usage

If you are using Google authentication (`accounts-google`), add this package like this:

`meteor add stijndepestel:google-fake`

Your app will no longer authenticate with Google in development mode and will authenticate with
a fake user even if you do not have an internet connection. This package does not affect production
as it is a `debugOnly` package.

## About

This package is based on and forked from [emmerge:google-fake](https://github.com/emmerge/meteor-google-fake).

