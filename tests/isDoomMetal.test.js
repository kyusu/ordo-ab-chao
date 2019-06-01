const classifierTest = require('./classifierTest.js');

const isDoomMetal = require('../src/isDoomMetal.js');

const genres = [
    ['Symphonic/Melodic Black Metal', false],
    ['Symphonic/Melodic Death Metal with Folk/Industrial elements', false],
    ['Acoustic, Ambient', false],
    ['Psychedelic Blues/Southern Rock', false],
    ["Death Metal with Thrash/Doom elements", false],
    ["Death/Doom Metal (early), Heavy/Thrash Metal (later)", true],
    ["Black/Doom Metal, Deathcore", true],
    ["Acoustic/Folk (early), Funeral Doom Metal (later)", true],
    ["Alternative/Doom Metal", true],
    ["Ambient Black Metal, Drone Doom", false],
    ["Ambient Doom/Post-Metal", false],
    ["Sludge/Groove Metal/Post-Metal/Rock", false],
    ["Black Metal (early), Funeral Doom Metal (later)", true],
    ['Atmospheric Blackened Doom Metal', true],
    ['Avant-garde Doom Metal/Drone/Folk', true],
    ['Black Metal (early), Middle Eastern/Funeral Doom Metal (later)', true],
    ['Death \'n\' Roll, Thrash \'n\' Roll, Doom Metal, Sludge Metal', true],
    ['Death/Black Metal with Doom influences', false],
    ['Doom, Folk, Gothic Metal', true],
    ['Drone Doom/Folk Metal', false],
    ['Drone/Post-/Doom Metal', true],
    ['Funeral Doom Metal', true],
    ['Doom Metal', true]
];

classifierTest('Doom Metal', isDoomMetal, genres);
