const watcher = require('../src/watcher');

const fs = require('fs');
const path = require('path');
const config = require('../src/config.json');

test('Ensure valid csv is being parsed to json', async () => {
    const watched = path.join(__dirname, config.watched);
    const output = path.join(__dirname, config.output);
    const processed = path.join(__dirname, config.processed);
    
    await watcher.watch(watched, output, processed);
    
    const inputFile = path.join(watched, 'test.csv');
    fs.writeFileSync(inputFile, 'test,data\n1,hello\n2,world', (err) => {
        if (err) throw err;
    });
    
    const outputFile = path.join(output, 'test.json');
    const processedFile = path.join(processed, 'test.csv');
    const expectedOutput = JSON.stringify([
        { test: '1', data: 'hello' },
        { test: '2', data: 'world' },
    ], null, 2);

    expect(fs.readFileSync(outputFile, 'utf8')).toBe(expectedOutput);
    expect(fs.readFileSync(processedFile, 'utf8')).toBe('test,data\n1,hello\n2,world');
});

test('Ensure invalid file is handled', async () => {
    const watched = path.join(__dirname, config.watched);
    const output = path.join(__dirname, config.output);
    const processed = path.join(__dirname, config.processed);
    
    await watcher.watch(watched, output, processed);
    
    const inputFile = path.join(watched, 'invalidTest.txt');
    fs.writeFileSync(inputFile, 'This is not a csv file', (err) => {
        if (err) throw err;
    });

    const processedFile = path.join(processed, 'invalidTest.txt');
    const outputFile = path.join(output, 'invalidTest.json');
    const expectedOutput = 'This is not a csv file';

    expect(fs.readFileSync(inputFile, 'utf8')).toBe(expectedOutput);
    expect(fs.existsSync(inputFile)).toBe(true);
    expect(fs.existsSync(processedFile)).toBe(false);
    expect(fs.existsSync(outputFile)).toBe(false);
});
