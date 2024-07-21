#!/usr/bin/env node
const runner = require("./src/jobs/jobRunner");

runner(process.argv.slice(2));
