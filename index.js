const CONFIG_KEY = "hyperWindowSize";
const DEFAULT_WIDTH = 500;
const DEFAULT_HEIGHT = 500;

let width = null;
let height = null;
let browserWindowSingleton = null;

const trySetSize = () => {
  if (width && height && browserWindowSingleton && !browserWindowSingleton.isDestroyed()) {
    browserWindowSingleton.setSize(width, height);
  }
};

module.exports.decorateConfig = config => {
  width = config[CONFIG_KEY].width || DEFAULT_WIDTH;
  height = config[CONFIG_KEY].height || DEFAULT_HEIGHT;
  trySetSize();
  return config;
};

module.exports.onWindow = browserWindow => {
  browserWindowSingleton = browserWindow;
  trySetSize();
};
