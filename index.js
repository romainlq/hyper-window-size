const CONFIG_KEY = "hyperWindowSize";
const DEFAULT_WIDTH = 540;
const DEFAULT_HEIGHT = 380;

const DEFAULT_POS_X = 50;
const DEFAULT_POS_Y = 50;

let width = null;
let height = null;
let startX = null;
let startY = null;
let browserWindowSingleton = null;

const trySetSize = () => {
  if (browserWindowSingleton && !browserWindowSingleton.isDestroyed()) {
    if (typeof height === "number" && typeof width === "number") {
      browserWindowSingleton.setSize(width, height);
    }
    if (typeof startX === "number" && typeof startY === "number") {
      browserWindowSingleton.setPosition(startX, startY);
    }
  }
};

module.exports.decorateConfig = config => {
  if (config[CONFIG_KEY].width || config[CONFIG_KEY].height) {
    width = config[CONFIG_KEY].width || DEFAULT_WIDTH;
    height = config[CONFIG_KEY].height || DEFAULT_HEIGHT;
  }

  if (config[CONFIG_KEY].startX || config[CONFIG_KEY].startY) {
    startX = config[CONFIG_KEY].startX || DEFAULT_POS_X;
    startY = config[CONFIG_KEY].startY || DEFAULT_POS_Y;
  }
  trySetSize();
  return config;
};

module.exports.onWindow = browserWindow => {
  browserWindowSingleton = browserWindow;
  trySetSize();
};
