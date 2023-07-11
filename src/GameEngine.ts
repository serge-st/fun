import { BaseClass } from './Classes/BaseClass';
import { Warrior } from './Classes/Warrior';
import { Wizzard } from './Classes/Wizzard';
import { DiceRoller } from './utils/DiceRoller';
import { NameGenerator } from './utils/NameGenerator';

// const bobWarrior = new Warrior('Bob');

export class GameEngine {
    availableClasses: typeof BaseClass[] = [BaseClass, Warrior, Wizzard];
    playerInitiative: number;
    enemyInitiative: number;
    isPlayerFirst: boolean;
    player: BaseClass;
    enemy: BaseClass;
    isGameOver: boolean = false;

    constructor(level: number) {
        this.playerInitiative = DiceRoller.getD20(1);
        this.enemyInitiative = DiceRoller.getD20(1);
        this.isPlayerFirst = this.playerInitiative > this.enemyInitiative ? true : false;
        this.player = new Warrior('Bob')
        this.enemy = this.generateOponent(level);
    }

    private generateOponent(level: number): BaseClass {
        // const classIndex = Math.ceil(DiceRoller.getD6(1) / 2) - 1;
        // const chosenClass = this.availableClasses[classIndex];
        return new Warrior(NameGenerator.getName(), level);
    }

    turn(): void {
        if (this.isPlayerFirst) {
            this.processOneTurn('player');
            this.checkWinner();
            if (this.isGameOver) return;
            this.processOneTurn('enemy');
            this.checkWinner();
        } else {
            this.processOneTurn('enemy');
            this.checkWinner();
            if (this.isGameOver) return;
            this.processOneTurn('player');
            this.checkWinner();
        }
    }

    private processOneTurn(entity: 'player' | 'enemy'): void {
        const oponent = entity === 'player' ? 'enemy' : 'player';

        const isHit = this[entity].attack(this[oponent].armorClass);
        isHit
            ? this[oponent].receiveDamage(this[entity].causeDamage())
            : null;
    }

    private checkWinner(): void {
        if (!this.player.isAlive) {
            console.log(`${this.enemy.characterName} wins, YOU LOSE!`);
            this.isGameOver = true;
        }
        if (!this.enemy.isAlive) {
            console.log(`Congatulations ${this.player.characterName}!!!`);
            console.log(`${this.enemy.characterName} is defeated.`);
            this.isGameOver = true;
        }
    }

}

// const game = new GameEngine(1);
// while (!game.isGameOver) {
// rl.question(`Next turn? `, (oneOrTwo: string) => {
//     if (oneOrTwo === '1') {
//         game.turn();
//     } else {
//         console.log('Game Over')
//     }
//     rl.close();
// });
// }

export function* engine() {
    console.log('Battle started...');
    const game = new GameEngine(1);
    while (!game.isGameOver) {
        game.turn();
        console.log('-----')
        yield game.isGameOver;
    }
}

// rl.question(`Next turn? `, (oneOrTwo: string) => {
//     if (oneOrTwo === '1') {
//         game.turn();
//     } else {
//         console.log('Game Over')
//     }
//     rl.close();
// });

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// readline.question(`What's your name?`, (name: string) => {
//     console.log(`Hi ${name}!`);
//     readline.close();
// });
