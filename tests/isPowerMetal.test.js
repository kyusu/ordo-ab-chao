const classifierTest = require('./classifierTest.js');

const isPowerMetal = require('../src/isPowerMetal.js');

const genres = [
    ['Symphonic/Melodic Black Metal', false],
    ['Symphonic/Melodic Death Metal with Folk/Industrial elements', false],
    ['Acoustic, Ambient', false],
    ['Psychedelic Blues/Southern Rock', false],
    ["Death Metal with Thrash/Doom elements", false],
    ["AOR (early), Power/Progressive Metal (later)", true],
    ["Alternative Rock/Power Metal with Electronic influences", true],
    ["Atmospheric Black Metal/Noise/Power Electronics", false],
    ["Atmospheric Power Metal", true],
    ["Atmospheric Power/Thrash Metal", true],
    ["Black Metal (early), Melodic Power Metal (later)", true],
    ["Black Metal, Harsh Noise/Power Electronics", false],
    ["Black Metal/Crust with Heavy/Power Metal influences", false],
    ["Black/Folk/Power Metal", true],
    ["Blackened Power Metal", true],
    ["Crust Punk (early), Grindcore/Powerviolence", false],
    ["Dance Pop/Hard Rock (early), Power Metal (later)", true],
    ["Death Metal (early & later), Power Metal (mid)", true],
    ["Death Metal with Power influences", false],
    ["Death Metal, Power Metal, Ambient, Electronic", true],
    ["Death Metal/Grindcore with Melodic and Power Metal elements", false],
    ["Death Metal/Hardcore/Powerviolence", false],
    ["Death/Power/Progressive/Thrash Metal/Shred", true],
    ["Epic Power Metal (early), Metalcore (later)", true],
    ["Gothic/Death/Doom Metal (early), Neoclassical Power Metal (later)", true],
    ["Metalcore/Power Metal", true],
    ["Power  Metal", true],
    ["Power A Cappella", false],
    ["Power Metal", true],
    ["Progressive/Symphonic Power Metal", true]
];

classifierTest('Power Metal', isPowerMetal, genres);
