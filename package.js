Package.describe({
  name: 'dummy-package',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript@0.1.5');
  api.addFiles('dummy-package.js');
});

Package.onTest(function(api) {
  api.use('ecmascript@0.1.5');
  api.use(['velocity:core@0.10.4', 'mike:mocha-package@0.5.8']);
  api.use('dummy-package@0.0.2');
  api.addFiles('dummy-package-tests.js', ['client', 'server']);
});
