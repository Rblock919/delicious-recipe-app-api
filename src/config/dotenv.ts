import dotenv from 'dotenv';

const loadConfig = () => {
  console.log('in load config');
  const remote = process.env.REMOTE || false;

  if (!remote) {
    dotenv.config();
  }
};

export default loadConfig;


