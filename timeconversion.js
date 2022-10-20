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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    const arr = s.slice(0, s.length - 2).split(":")
    
    if (s.slice(s.length - 2) === 'PM') {
        arr[0] != '12' && (arr[0] = Number(arr[0]) + 12)
    } else {
        arr[0] == '12' && (arr[0] = '00')
    }
    
    return arr.join(":")
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}


//https://www.hackerrank.com/challenges/time-conversion/problem