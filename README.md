# ordo-ab-chao
[![Maintainability](https://api.codeclimate.com/v1/badges/3579410cd123c5b893a8/maintainability)](https://codeclimate.com/github/kyusu/ordo-ab-chao/maintainability)
[![dependencies Status](https://david-dm.org/kyusu/ordo-ab-chao/status.svg)](https://david-dm.org/kyusu/ordo-ab-chao)


Encyclopaedia Metallum Genre Classifier

## Purpose

I wanted to do some statistics with the data from the [Encyclopaedia Metallum](https://www.metal-archives.com), but
quickly discovered that the *genre* is a free text field, so for 120.000 plus bands, I found 8.500 plus genres with
such gems as `Thrash Metal (1986-1988), Death Metal (1989-1991, 2008-), Progressive Death Metal/Jazz Fusion (1993)`.

This would not do, so I wrote a bunch of classifiers for the following genres:

- [Black Metal](src/isBlackMetal.js)
- [Death Metal](src/isDeathMetal.js)
- [Doom Metal](src/isDeathMetal.js)
- [Thrash Metal](src/isThrashMetal.js)
- [Speed Metal](src/isSpeedMetal.js)
- [Power Metal](src/isPowerMetal.js)
- [Heavy Metal](src/isHeavyMetal.js)

and just [Metal](src/isMetal.js) in general.

For the exact rules, see the [unit tests](tests).

## Usage
```javascript
const {isBlackMetal} = require('ordo-ab-chao');

isBlackMetal.runWith('Avant-garde Black Metal/Ambient');
```
