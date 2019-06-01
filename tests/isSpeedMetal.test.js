const classifierTest = require('./classifierTest.js');

const isSpeedMetal = require('../src/isSpeedMetal.js');

const genres = [
    ['Symphonic/Melodic Black Metal', false],
    ['Symphonic/Melodic Death Metal with Folk/Industrial elements', false],
    ['AOR/Funk (early), Thrash Metal/Crossover (mid), Pop/Rock (later)', false],
    ['Acoustic, Ambient', false],
    ['Psychedelic Blues/Southern Rock', false],
    ['Raw Black Metal (early), Blackened Thrash/Heavy Metal (later)', false],
    ['Sludge Metal/Blackened Crust Punk', false],
    ['Atmospheric Blackened Death Metal', false],
    ['Acoustic Death/Black Metal (early) Black Metal (later)', false],
    ['Acoustic Folk, Raw Black Metal', false],
    ['Ambient (early), Black Metal/Ambient (later)', false],
    ['Ambient Black Metal (early), Ambient Black Metal with Industrial influences (later)', false],
    ['Ambient Post-Black Metal', false],
    ['Ambient/Noise/Electronic (early), Experimental Doom/Black Metal/Dark Ambient', false],
    ['Atmospheric Sludge/Post-Black Metal/Crust', false],
    ['Death Metal with Black Metal influences', false],
    ['Death Metal with Black Metal/Grindcore influences', false],
    ['Death Metal with Black Metal/Grindcore influences', false],
    ['Black Metal (early), Black/Thrash/Speed Metal (later)', true],
    ['Black Metal (early), Speed/Thrash Metal (later)', true],
    ['Black/Death/Speed Metal', true],
    ['Black/Speed Metal, Synthwave', true],
    ['Black/Speed/Thrash Metal, Techno (mid)', true],
    ['Black/Thrash/Speed Metal with Doom influences', true],
    ['Death Metal with Speed/Thrash elements', false],
    ['Death/Thrash Metal, Speed Metal', true],
    ['Epic Speed Metal (early), Death/Thrash Metal (later)', true],
    ['Hardcore (early), Melodic Speed Metal (later)', true],
    ['Heavy Metal with Power and Speed influences', false],
    ['Heavy Metal, Speed Metal', true],
    ['Heavy/Speed  Metal', true],
    ['Speed Metal', true],
    ['Speed Metal (early), Heavy/Power Metal (later)', true],
];

classifierTest('Speed Metal', isSpeedMetal, genres);
