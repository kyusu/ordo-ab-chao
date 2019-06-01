const Pred = require('crocks/Pred');
const R = require('ramda');
const {getIsMetalSubGenrePredicate} = require('./isMetal.js');

const removeDeathCore = R.replace('deathcore', '');
const removeDeathNRoll = R.replace('death \'n\' roll', '');

const removeCruft = R.compose(removeDeathCore, removeDeathNRoll);

const isDeathMetal = getIsMetalSubGenrePredicate(Pred(R.test(/death/)).contramap(removeCruft));

module.exports = isDeathMetal;
