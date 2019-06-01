const classifierTest = require('./classifierTest.js');

const isThrashMetal = require('../src/isThrashMetal.js');

const genres = [
    ['Symphonic/Melodic Black Metal', false],
    ['Symphonic/Melodic Death Metal with Folk/Industrial elements', false],
    ['AOR/Funk (early), Thrash Metal/Crossover (mid), Pop/Rock (later)', true],
    ['Acoustic, Ambient', false],
    ['Psychedelic Blues/Southern Rock', false],
    ['Raw Black Metal (early), Blackened Thrash/Heavy Metal (later)', true],
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
    ['Black/Death/Speed Metal', false],
    ['Black/Speed Metal, Synthwave', false],
    ['Black/Speed/Thrash Metal, Techno (mid)', true],
    ['Black/Thrash/Speed Metal with Doom influences', true],
    ['Death Metal with Speed/Thrash elements', false],
    ['Death/Thrash Metal, Speed Metal', true],
    ['Epic Speed Metal (early), Death/Thrash Metal (later)', true],
    ['Hardcore (early), Melodic Speed Metal (later)', false],
    ['Heavy Metal with Power and Speed influences', false],
    ['Heavy Metal, Speed Metal', false],
    ['Heavy/Speed  Metal', false],
    ['Speed Metal', false],
    ['Speed Metal (early), Heavy/Power Metal (later)', false],
    ["Death Metal with Thrash influences", false],
    ["Death Metal with Thrash/Black Metal influences", false],
    ["Death Metal with Thrash/Black influences", false],
    ["Death Metal with Thrash/Doom elements", false],
    ["Death Metal/Grindcore/Thrash", true],
    ["Death/Doom Metal (early), Heavy/Thrash Metal (later)", true],
    ["Death/Thrash Metal (early), Heavy/Power/Thrash Metal (later)", true],
    ["Death/Thrash Metal (early), Thrashcore/Grindcore (later)", true],
    ['Doom Metal/Thrashcore', false],
    ['Industrial/Thrash Metal with Death Metal influences', true],
    ['Industrial/Technical Thrash Metal', true],
    ['Power Metal with Thrash Metal elements', false],
    ["Stoner Metal/Thrash 'n' Roll/Punk", false],
    ['Technical Thrash Metal (early), Alternative/Progressive Rock (later)', true],
    ['Thrash  Metal', true],
    ["Thrash 'n' Roll", false],
    ["Thrash 'n' Roll, Heavy Metal", false],
    ["Thrash 'n' Roll/Crossover", false],
    ["Thrash 'n' Roll/Groove Metal", false],
    ["Thrash 'n' Roll/Punk", false],
    ['Thrash Metal with Grunge/Southern Rock influences', true],
    ['Thrash Metal with Hardcore and Doom/Gothic influences', true],
    ['Thrash, Heavy Metal', true],
    ['Thrash/Alternative Metal', true],
    ['Thrashcore', false],
    ['Thrashcore (early), Heavy/Progressive Metal (later)', false],
    ['Thrashcore/Crossover', false],
    ['Thrashcore/Death Metal', false],
    ['Thrashcore/Industrial Metal', false],
    ['Thrashcore/Thrash Metal', true]
];

classifierTest('Thrash Metal', isThrashMetal, genres);