const Pred = require('crocks/Pred');
const R = require('ramda');
const {getIsMetalSubGenrePredicate} = require('./isMetal.js');

const removeBlackened = R.replace('blackened', '');
const removePostBlackMetal = R.replace('post-black', '');

const removeCruft = R.compose(removeBlackened, removePostBlackMetal);

const isBlackMetal = getIsMetalSubGenrePredicate(Pred(R.test(/black/)).contramap(removeCruft));

module.exports = isBlackMetal;
