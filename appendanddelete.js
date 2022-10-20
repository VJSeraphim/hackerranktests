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
 * Complete the 'appendAndDelete' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 *  3. INTEGER k
 */

function appendAndDelete(s, t, k) {
    let sArr = [...s]
    let tArr = [...t]
    let count = 0
    for(let i=0; i<s.length && i === count; i++) {
        if(sArr[i] === tArr[i]) count++
    }
    
    let totalLength = s.length + t.length
    if( totalLength <= count * 2 + k && totalLength%2 === k %2 || totalLength < k) return 'Yes'
    else return 'No'

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const t = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = appendAndDelete(s, t, k);

    ws.write(result + '\n');

    ws.end();
}


//https://www.hackerrank.com/challenges/append-and-delete/problem