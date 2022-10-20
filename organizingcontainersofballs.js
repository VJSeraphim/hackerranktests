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
 * Complete the 'organizingContainers' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts 2D_INTEGER_ARRAY container as parameter.
 */

function organizingContainers(container) {
    const containers = new Array(container.length).fill(0)
    const types = new Array(container.length).fill(0)
    
    for ( let i=0; i<container.length; i++ ) {
        const containerArr = container[i]
        for ( let j=0; j<container.length; j++) {
            const ballCount = containerArr[j]
            containers[i] += ballCount
            types[j] += ballCount
        }
    }
    
    containers.sort()
    types.sort()
    for ( let i=0; i<container.length; i++) {
        if (containers[i] !== types[i])
        return 'Impossible'
    }
    
    return 'Possible'

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine().trim(), 10);

        let container = Array(n);

        for (let i = 0; i < n; i++) {
            container[i] = readLine().replace(/\s+$/g, '').split(' ').map(containerTemp => parseInt(containerTemp, 10));
        }

        const result = organizingContainers(container);

        ws.write(result + '\n');
    }

    ws.end();
}


//https://www.hackerrank.com/challenges/organizing-containers-of-balls/problem
