#!/usr/bin/env node

const arg = require('arg');

main(process.argv)

async function main(args) {
    let options = parseArgumentsIntoOptions(args)





    console.log(options)
}



function parseArgumentsIntoOptions(rawArgs) {
    const args = arg({
        '--path': String,
        '--output': String,
        '--fileTypes': String,
        '--useGitIgnore': Boolean,
        '--verbose': Boolean,
        '-p': '--path',
        '-o': '--output',
        '-f': '--fileTypes',
        '-g': '--useGitIgnore',
        '-v': '--verbose',
    }, {
        argv: rawArgs.slice(2),
    });
    return {
        path: args['--path'] || "./",
        output: args['--output'] || "./images/",
        fileTypes: args['--fileTypes'] || "*.*",
        useGitIgnore: args['--useGitIgnore'] || true,
        verbose: args['--verbose'] || false
    };
}