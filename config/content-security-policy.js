'use strict';

module.exports = function () {
  return {
    delivery: ['header'],
    enabled: true, //true for production
    failTests: true,
    policy: {
      'connect-src': ['self'],
      'default-src': ['self'],
      'script-src': ['self'],
      'frame-src': ['self', 'https://www.google.com', 'http://www.google.com'],
      'font-src': [
        'self',
        'https://fonts.gstatic.com',
        'http://fonts.gstatic.com',
      ],
      'img-src': ["'self'"],
      'style-src': [
        "'self'",
        'https://fonts.googleapis.com/',
        'http://fonts.googleapis.com/',
        'unsafe-inline',
      ],
      'media-src': null,
    },
    reportOnly: false, //false for production
  };
};
