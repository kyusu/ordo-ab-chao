const classifierTest = require('./classifierTest.js');

const isHeavyMetal = require('../src/isHeavyMetal.js');

const genres = [
    ['Symphonic/Melodic Black Metal', false],
    ['Symphonic/Melodic Death Metal with Folk/Industrial elements', false],
    ['Acoustic, Ambient', false],
    ['Psychedelic Blues/Southern Rock', false],
    ["Death Metal with Thrash/Doom elements", false],
    ["Death/Doom Metal (early), Heavy/Thrash Metal (later)", true],
    ["Alternative Heavy/Groove Metal", true],
    ["Alternative/Art Rock (early), Heavy Metal (later)", true],
    ["Atmospheric Doom/Black Metal (early), Heavy/Doom Metal (later)", true],
    ["Atmospheric Heavy Metal with Hard Rock influences", true],
    ["Black Metal (early), Blackened Heavy Metal with Folk influences (later)", true],
    ["Black Metal with RAC/Heavy Metal influences", false],
    ["Black/Heavy Metal/Crust", true],
    ["Crust 'n' Roll/Heavy Metal", true],
    ["Dark Heavy/Doom Metal", true],
    ["Experimental/Progressive Heavy Metal", true],
    ["Folk Heavy Metal", true],
    ["Heavy Metal (early), AOR/Alternative Rock (later)", true],
    ['Heavy Metal', true],
    ["NWOBHM", true],
    ["NWOBHM (early), Hard Rock (mid), Pop Rock (later)", true],
    ["NWOBHM, Doom Metal", true],
    ["Oi!/Punk, NWOBHM, Heavy Metal/Hard Rock", true],
    ["Speed Metal/NWOBHM", true]
];

classifierTest('Heavy Metal', isHeavyMetal, genres);
