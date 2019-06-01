const Pred = require('crocks/Pred');
const R = require('ramda');
const {getIsMetalSubGenrePredicate} = require('./isMetal.js');

const removeThrashCore = R.replace('thrashcore', '');
const removeThrashNRoll = R.replace('thrash \'n\' roll', '');

const removeCruft = R.compose(removeThrashCore, removeThrashNRoll);

const isThrashMetal = getIsMetalSubGenrePredicate(Pred(R.test(/thrash/)).contramap(removeCruft));

module.exports = isThrashMetal;
