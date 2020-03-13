const authConfig = {
  sessionsSecret: process.env.SESSION_SECRET,
  tokenSecret: process.env.TOKEN_SECRET,
  cookieSecret: process.env.COOKIE_SECRET,
  saltRounds: Number.parseInt(process.env.SALT_ROUNDS, 10),
};

export default authConfig;
