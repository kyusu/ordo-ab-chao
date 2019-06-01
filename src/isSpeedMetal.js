const Pred = require('crocks/Pred');
const R = require('ramda');
const {getIsMetalSubGenrePredicate} = require('./isMetal.js');

const isSpeedMetal = getIsMetalSubGenrePredicate(Pred(R.test(/speed/)));

module.exports = isSpeedMetal;
