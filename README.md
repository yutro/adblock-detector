# AdblockDetector

Micro library for detecting adblock presense in user browser.

Detection on server side is not supported. Please use library only on client side.

![npm version](https://img.shields.io/npm/v/adblock-detector.svg)
![package size minified](https://img.shields.io/bundlephobia/min/adblock-detector?style=plastic)
[![](https://data.jsdelivr.com/v1/package/npm/adblock-detector/badge)](https://www.jsdelivr.com/package/npm/adblock-detector)

![total downloads](https://img.shields.io/npm/dt/adblock-detector.svg)
![total downloads per year](https://img.shields.io/npm/dy/adblock-detector.svg)
![total downloads per week](https://img.shields.io/npm/dw/adblock-detector.svg)
![total downloads per month](https://img.shields.io/npm/dm/adblock-detector.svg)

### Installation

#### Via NPM
```
npm i adblock-detector
```

#### Via Yarn
```
yarn add adblock-detector
```

### Usage

```javascript

import AdblockDetector from 'adblock-detector';

const adbDetector = new AdblockDetector()

const userHasAdblock = adbDetector.detect(); // true if user has it false if not
```

### That's it!
