// filler text
const authConfig = {
  sessionsSecret: process.env.SESSION_SECRET,
  tokenSecret: process.env.TOKEN_SECRET,
  cookieSecret: process.env.COOKIE_SECRET,
  saltRounds: Number.parseInt(process.env.SALT_ROUNDS)
  // sessionsSecret: 's$s$s$e3e3e3s$s$i!i!o0o0nNnNterces',
  // tokenSecret: '!$th!$sEcr!t!v3?',
  // cookieSecret: 'sshhW3Lov3CooK!e$',
  // saltRounds: 12
};

module.exports = authConfig;
