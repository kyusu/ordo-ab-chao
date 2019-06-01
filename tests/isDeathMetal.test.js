const classifierTest = require('./classifierTest.js');

const isDeathMetal = require('../src/isDeathMetal.js');

const genres = [
    ['Symphonic/Melodic Black Metal', false],
    ['Symphonic/Melodic Death Metal with Folk/Industrial elements', true],
    ['Acoustic, Ambient', false],
    ['Psychedelic Blues/Southern Rock', false],
    ['Atmospheric Blackened Death Metal', true],
    ['Acoustic Death/Black Metal (early) Black Metal (later)', true],
    ['Death Metal with Black Metal influences', true],
    ['Death Metal with Black Metal/Grindcore influences', true],
    ['Death Metal with Black Metal/Grindcore influences', true],
    ['Black/Death/Speed Metal', true],
    ['Death Metal with Speed/Thrash elements', true],
    ['Death/Thrash Metal, Speed Metal', true],
    ['Epic Speed Metal (early), Death/Thrash Metal (later)', true],
    ["Death Metal with Thrash influences", true],
    ["Death Metal with Thrash/Black Metal influences", true],
    ["Death Metal with Thrash/Black influences", true],
    ["Death Metal with Thrash/Doom elements", true],
    ["Death Metal/Grindcore/Thrash", true],
    ["Death/Doom Metal (early), Heavy/Thrash Metal (later)", true],
    ["Death/Thrash Metal (early), Heavy/Power/Thrash Metal (later)", true],
    ["Death/Thrash Metal (early), Thrashcore/Grindcore (later)", true],
    ['Industrial/Thrash Metal with Death Metal influences', false],
    ['Thrash  Metal', false],
    ["Thrash 'n' Roll", false],
    ['Thrashcore/Death Metal', true],
    ["Alternative/Death Metal", true],
    ["Atmospheric Death Metal/Deathcore", true],
    ["Black Metal (early), Blackened Deathcore/Metalcore (later)", false],
    ["Black Metal (early), Death 'n' Roll (later)", false],
    ["Black Metal, Deathcore", false],
    ["Black/Death Metal", true],
    ["Black/Doom Metal, Deathcore", false],
    ["Blackened Deathcore", false],
    ["Death 'n' Roll", false],
    ["Death 'n' Roll (early), Blackened Death Metal (later)", true],
    ["Death 'n' Roll/Groove Metal", false],
    ["Death Metal (early), Death 'n' Roll (later)", true]
];

classifierTest('Death Metal', isDeathMetal, genres);
