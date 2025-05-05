const watcher = require('../src/watcher');

const fs = require('fs');
const path = require('path');
const config = require('../src/config.json');

test('Ensure watched directory is watching for a test csv', async () => {
    const watched = path.join(__dirname, config.watched);
    const output = path.join(__dirname, config.output);
    const processed = path.join(__dirname, config.processed);

    await watcher.watch(watched, output, processed);

    const inputFile = path.join(watched, 'test.csv');
    const outputFile = path.join(output, 'test.json');
    const processedFile = path.join(processed, 'test.csv');

    expect(fs.existsSync(inputFile)).toBe(true);
    expect(fs.existsSync(outputFile)).toBe(true);
    expect(fs.existsSync(processedFile)).toBe(true);
});