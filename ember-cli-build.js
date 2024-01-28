'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    sourcemaps: { enabled: true },
    prember: {
      urls: ['/', '/about', '/services', '/visit', '/wrong-url', '/policies'],
      // enabled: false,
    },
  });

  return app.toTree();
};
