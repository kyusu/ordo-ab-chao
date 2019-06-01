const Pred = require('crocks/Pred');
const R = require('ramda');
const {getIsMetalSubGenrePredicate} = require('./isMetal.js');

const removePowerElectronics = R.replace('power electronics', '');
const removePowerViolence = R.replace('powerviolence', '');
const removeCruft = R.compose(removePowerElectronics, removePowerViolence);

const isPowerMetal = getIsMetalSubGenrePredicate(Pred(R.test(/power/)).contramap(removeCruft));

module.exports = isPowerMetal;
