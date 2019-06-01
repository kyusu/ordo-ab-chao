const classifierTest = require('./classifierTest.js');

const isBlackMetal = require('../src/isBlackMetal.js');

const genres = [
    ['Symphonic/Melodic Black Metal', true],
    ['Symphonic/Melodic Death Metal with Folk/Industrial elements', false],
    ['AOR/Funk (early), Thrash Metal/Crossover (mid), Pop/Rock (later)', false],
    ['Acoustic, Ambient', false],
    ['Psychedelic Blues/Southern Rock', false],
    ['Raw Black Metal (early), Blackened Thrash/Heavy Metal (later)', true],
    ['Sludge Metal/Blackened Crust Punk', false],
    ['Atmospheric Blackened Death Metal', false],
    ['Acoustic Death/Black Metal (early) Black Metal (later)', true],
    ['Acoustic Folk, Raw Black Metal', true],
    ['Ambient (early), Black Metal/Ambient (later)', true],
    ['Ambient Black Metal (early), Ambient Black Metal with Industrial influences (later)', true],
    ['Ambient Post-Black Metal', false],
    ['Ambient/Noise/Electronic (early), Experimental Doom/Black Metal/Dark Ambient', true],
    ['Atmospheric Sludge/Post-Black Metal/Crust', false],
    ['Death Metal with Black Metal influences', false],
    ['Death Metal with Black Metal/Grindcore influences', false]
];

classifierTest('Black Metal', isBlackMetal, genres);
