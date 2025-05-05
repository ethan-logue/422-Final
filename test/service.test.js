const { service } = require('../src/service');

const fs = require('fs');
const path = require('path');
const config = require('../src/config.json');

test('Ensure watched directory exists', () => {
    const watched = path.join(__dirname, config.watched);
    expect(fs.existsSync(watched)).toBe(true);
});

test('Ensure output directory exists', () => {
    const output = path.join(__dirname, config.output);
    expect(fs.existsSync(output)).toBe(true);
});

test('Ensure processed directory exists', () => {
    const processed = path.join(__dirname, config.processed);
    expect(fs.existsSync(processed)).toBe(true);
});