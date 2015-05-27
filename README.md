# google-fake
A stub for use in testing Meteor apps. Stubs the oauth calls and allows you to fake stub more.

## Usage

If you are using Google authentication (`accounts-google`), add this package like this:

`meteor add emmerge:google-fake`

Your app will no longer authenticate with Google in development mode and will authenticate with
a fake user even if you do not have an internet connection. This package does not affect production
as it is a `debugOnly` package.

## About

This package is based on and forked from [xolvio:github-fake](https://github.com/xolvio/meteor-github-stub).

