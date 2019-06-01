const test = require('tape');

/**
 * @param {string} genreName
 * @param {{runWith: function(string): boolean}} classifier
 * @param {Array.<Array.<string, boolean>>} genres
 */
const classifierTest = (genreName, classifier, genres) => {
    test(`it should correctly classify "${genreName}"`, t => {
        t.plan(genres.length);
        genres.forEach(([genre, expected]) => {
            const actual = classifier.runWith(genre);
            const message = `it should have classified "${genre}" as ${expected ? `"${genreName}"` : 'other kind of music'}`;
            t.equal(actual, expected, message);
        });
    });
};

module.exports = classifierTest;
