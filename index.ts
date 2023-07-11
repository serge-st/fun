import readline from 'readline';
import { engine } from './src/GameEngine';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const en = engine();
let t = en.next()

while (!t.done) {
    t = en.next()
}


function ask() {
    rl.question(`Next turn? `, (yOrN: string) => {
        if (yOrN === 'y') {
            t = en.next();
        } else {
            console.log('Battle is over...');
        }
        rl.close();
    });
}

