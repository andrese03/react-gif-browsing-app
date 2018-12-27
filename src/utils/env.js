const ENVIRONMENT = process.env.NODE_ENV || 'development';
const config = {};

// defaults
config.default = {
  GIPHY_HOST: process.env.GIPHY_HOST || 'https://api.giphy.com',
  GIPHY_API_KEY: process.env.GIPHY_API_KEY || 'LaTKjBCfg57PXCZ89vrOdPK6RiZwxd5d',
  GIPHY_SEARCH: process.env.GIPHY_SEARCH || '/v1/gifs/search',
};

// development
config.development = {
};

// sandbox
config.test = {
};

// production
config.production = {
};

const isDevelopment = () => ENVIRONMENT === 'development';

const isTesting = () => ENVIRONMENT === 'test';

const isProduction = () => ENVIRONMENT === 'production';

// Creates the final version of the configuration file
// based on the defaults and the current node environment
const {
  GIPHY_HOST,
  GIPHY_API_KEY,
  GIPHY_SEARCH,
} = { ...config.default, ...config[ENVIRONMENT] };

export {
  isDevelopment,
  isTesting,
  isProduction,
  ENVIRONMENT,
  GIPHY_HOST,
  GIPHY_API_KEY,
  GIPHY_SEARCH,
};
