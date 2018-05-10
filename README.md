# hyper-window-size

Hyper-window-size is a simple plugin for [Hyper.app](https://hyper.is/) that lets you set the size of the window

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
