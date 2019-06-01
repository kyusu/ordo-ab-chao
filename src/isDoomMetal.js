const Pred = require('crocks/Pred');
const R = require('ramda');
const {getIsMetalSubGenrePredicate} = require('./isMetal.js');

const removeDroneDoom = R.replace('drone doom', '');

const isDoomMetal = getIsMetalSubGenrePredicate(Pred(R.test(/doom/)).contramap(removeDroneDoom));

module.exports = isDoomMetal;
