// helmet only seems to take effect when serving up angular locally,
// thus the domain angular is being served at is the same domain the node app is being served at
const helmet = require('helmet');

function appHeaderSecurity(app) {
  app.use(helmet());
  app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ['\'self\''],
      scriptSrc: ['\'self\'', '\'unsafe-eval\'', '\'unsafe-inline\'', 'http://code.jquery.com'],
      styleSrc: ['\'self\'', '\'unsafe-inline\'', 'https://fonts.googleapis.com'],
      imgSrc: ['\'self\'', 'data:', 'https://img.hellofresh.com', 'https://media.blueapron.com', 'https://homechef.imgix.net'],
      fontSrc: ['\'self\'', 'https://fonts.gstatic.com', 'data:'],
      connectSrc: ['\'self\'', 'https://delicious-recipe-app.herokuapp.com/api/'],
      // reportUri: '/cspviolation'
    }
  }));
}

module.exports = appHeaderSecurity;
