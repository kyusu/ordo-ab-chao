const test = require('tape');
const classifierTest = require('./classifierTest.js');
const {removeWithInfluencesPart, isMetal} = require('../src/isMetal.js');

test('it should remove the "with influences from" part of the genre', t => {
    t.plan(2);
    const genreWithoutInfluences = "Symphonic/Melodic Black Metal";
    const result1 = removeWithInfluencesPart(genreWithoutInfluences);
    t.equal(result1, genreWithoutInfluences, 'it should have removed nothing');

    const genreWithInfluences = "Symphonic/Melodic Death Metal with Folk/Industrial elements";
    const result2 = removeWithInfluencesPart(genreWithInfluences);
    t.equal(result2, 'Symphonic/Melodic Death Metal', 'it should have removed the "with influences part"');
});

const genres = [
    ['Symphonic/Melodic Black Metal', true],
    ['Symphonic/Melodic Death Metal with Folk/Industrial elements', true],
    ['AOR/Funk (early), Thrash Metal/Crossover (mid), Pop/Rock (later)', true],
    ['Acoustic, Ambient', false],
    ['Psychedelic Blues/Southern Rock', false],
    ['Death Metal (early), Metalcore (later)', true],
    ['Deathcore (early), Metalcore (later)', false],
    ['Deathcore/Metalcore', false],
    ['Electronic Metalcore', false],
    ['Ambient Doom/Post-Metal', false],
    ["Post Metal/Sludge", false],
    ["Sludge/Post-Metal, Post-Hardcore", false],
    ["NWOBHM", true],
    ["NWOBHM (early), Hard Rock (mid), Pop Rock (later)", true],

];

classifierTest('Metal', isMetal, genres);
