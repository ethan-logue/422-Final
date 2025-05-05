# CSV to JSON Parser

## What is it?
This application watches a specific directory and when a CSV file is dropped into it, the app processes this CSV and converts it to be formatted as JSON.

## How do I use it?
1. Clone this repo.
2. From the root of the project, run `npm install`.
3. From the root of the project, run `npm run start`.
4. Drop a valid CSV file into the `inbound` directory.
    - The CSV will be parsed and removed from the `inbound` directory.
    - The original CSV can be found in the `processed` directory.
5. The `outbound` directory will have the converted CSV -> JSON file!

### Testing
If you want to run unit tests for the application:
- From the root of the project, run `npm run test`.

### Requirements
- Node Version: `>=22.14.0`
- Dependencies (installed via `npm i`)
    - `chokidar`
    - `csv`
    - `dotenv`
    - `jest`
