const WIDTH_SETTINGS = {
  minSizeValueCol: 39,
  minSizeValuePixel: 370,
  normalSizeValue: 10,
  extraSizeValue: 5,
  extraUnitLocation: [4]
};

const HEIGHT_SETTINGS = {
  minSizeValueRow: 12,
  minSizeValuePixel: 300,
  normalSizeValue: 20,
  extraSizeValue: 25,
  extraUnitLocation: [2, 7]
};

const getLastNumber = num => +num.toString().slice(+num.toString().length - 1);

const convertWidth = value => {
  const isExtraValue = getLastNumber(value) === WIDTH_SETTINGS.extraUnitLocation[0] ? WIDTH_SETTINGS.extraSizeValue : 0;

  if (value >= WIDTH_SETTINGS.minSizeValueCol) {
    let pixelUnit = WIDTH_SETTINGS.minSizeValuePixel + isExtraValue;
    let colUnit = WIDTH_SETTINGS.minSizeValueCol;

    while (colUnit !== value && Number.isInteger(value)) {
      ++colUnit;

      if (getLastNumber(colUnit) !== WIDTH_SETTINGS.extraUnitLocation[0]) {
        pixelUnit += WIDTH_SETTINGS.normalSizeValue;
      }
    }

    return pixelUnit || WIDTH_SETTINGS.minSizeValuePixel;
  } else {
    return WIDTH_SETTINGS.minSizeValuePixel;
  }
};

const convertHeight = value => {
  if (value >= HEIGHT_SETTINGS.minSizeValueRow) {
    let pixelUnit = HEIGHT_SETTINGS.minSizeValuePixel;
    let rowUnit = HEIGHT_SETTINGS.minSizeValueRow;

    while (rowUnit !== value && Number.isInteger(value)) {
      ++rowUnit;

      if (
        getLastNumber(rowUnit) !== HEIGHT_SETTINGS.extraUnitLocation[0] &&
        getLastNumber(rowUnit) !== HEIGHT_SETTINGS.extraUnitLocation[1]
      ) {
        pixelUnit += HEIGHT_SETTINGS.normalSizeValue;
      } else {
        pixelUnit += HEIGHT_SETTINGS.extraSizeValue;
      }
    }

    return pixelUnit || HEIGHT_SETTINGS.minSizeValuePixel;
  } else {
    return HEIGHT_SETTINGS.minSizeValuePixel;
  }
};

module.exports = {
  convertWidth,
  convertHeight
};
