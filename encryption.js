'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'encryption' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function encryption(s) {
    const row = Math.ceil(Math.sqrt(s.length))
    const col = Math.ceil(Math.sqrt(s.length))
    let result = []
    
    for ( let i=0; i<col; i++) {
        let j = i
        let str = ''
        while (j<s.length) {
            str += s[j]
            j += row
        }
        result.push(str)
    }
    
    return (result.join(' '))
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = encryption(s);

    ws.write(result + '\n');

    ws.end();
}


//https://www.hackerrank.com/challenges/encryption/problem