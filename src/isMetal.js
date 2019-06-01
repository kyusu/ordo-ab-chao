const Pred = require('crocks/Pred');
const contramap = require('crocks/pointfree/contramap');
const R = require('ramda');

const removeWithInfluencesPart = R.compose(R.head, R.split(' with '));
const removeMetalCore = R.replace('metalcore', '');
const removePostMetal = R.replace(/post[ \-]metal/g, '');
const replaceNWOBHM = R.replace(/nwobhm/g, 'heavy metal');
const removeCruft = R.compose(
    replaceNWOBHM,
    removePostMetal,
    removeMetalCore,
    removeWithInfluencesPart,
    R.toLower
);
const addRemoveCruft = contramap(removeCruft);

const isMetal = Pred(R.test(/metal/));
const getIsMetalSubGenrePredicate = subGenrePred => isMetal.concat(subGenrePred);

module.exports = {
    removeWithInfluencesPart,
    isMetal: addRemoveCruft(isMetal),
    getIsMetalSubGenrePredicate: R.compose(addRemoveCruft, getIsMetalSubGenrePredicate)
};
