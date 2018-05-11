# hyper-window-size

[![CI Status](https://circleci.com/gh/romainwn/hyper-window-size.svg?style=shield)](https://circleci.com/gh/romainwn/hyper-window-size)
[![NPM version](https://badge.fury.io/js/hyper-window-size.svg)](https://www.npmjs.com/package/hyper-window-size)
![Downloads](https://img.shields.io/npm/dm/hyper-window-size.svg?style=flat)

Hyper-window-size is a simple plugin for [Hyper.app](https://hyper.is/) that lets you set the size of the window

![hyper-window-size](https://user-images.githubusercontent.com/13620579/39882075-1959f24c-5483-11e8-8722-851a2d4fb6d4.gif)

## Install

### Using hyper

To install, either use
```
hyper i hyper-window-size
```

### Manually

To install, just edit your `~/.hyper.js` and add `"hyper-window-size"` to `plugins`:
```
plugins: [
  "hyper-window-size"
],
```

## Configuration

Add the following to your config file :
````
module.exports = {
  config: {
    ...
    hyperWindowSize: {
      width: 500,
      height: 200
    },
    ...
  }
````

## License

[MIT](LICENSE)
