const Pred = require('crocks/Pred');
const R = require('ramda');
const {getIsMetalSubGenrePredicate} = require('./isMetal.js');

const heavyOrNWOBHM = R.either(R.test(/heavy/), R.test(/nwobhm/));

const isHeavyMetal = getIsMetalSubGenrePredicate(Pred(heavyOrNWOBHM).contramap(R.tap(console.log)));

module.exports = isHeavyMetal;
