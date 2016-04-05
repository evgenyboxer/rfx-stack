import dotenv from 'dotenv';
import getenv from 'getenv';
import path from 'path';

// load env file
dotenv.config();

const Config = getenv.multi({
  env: 'NODE_ENV',
  browsersync: {
    host: 'BROWSERSYNC_HOST',
    port: 'BROWSERSYNC_PORT',
  },
  web: {
    host: 'WEB_HOST',
    port: 'WEB_PORT',
  },
  api: {
    host: 'API_HOST',
    port: 'API_PORT',
  },
  io: {
    host: 'IO_HOST',
    port: 'IO_PORT',
  },
  db: {
    host: 'DB_HOST',
    name: 'DB_NAME',
    port: 'DB_PORT',
  },
});

const Dir = {
  src: path.resolve(__dirname),
  root: path.resolve(__dirname, '..'),
  modules: path.resolve(__dirname, '..', 'node_modules'),
  public: path.resolve(__dirname, '..', 'public'),
  build: path.resolve(__dirname, '..', 'public', 'build'),
  static: path.resolve(__dirname, '..', 'public', 'static'),
  config: path.resolve(__dirname, 'config'),
  components: path.resolve(__dirname, 'components'),
  containers: path.resolve(__dirname, 'containers'),
  stores: path.resolve(__dirname, 'stores'),
  server: path.resolve(__dirname, 'server'),
  models: path.resolve(__dirname, 'server', 'models'),
  services: path.resolve(__dirname, 'server', 'services'),
};

/**
  Expose Config on client-side
  WARNING: Do not expose passwords!
*/
const ExposeConfigToClient = {
  web: Config.web,
  api: Config.api,
  io: Config.io,
};

export { Dir, Config, ExposeConfigToClient };