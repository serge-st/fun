import { Character } from './Character';
import { DiceRoller } from './DiceRoller';

export class Warrior extends Character {
    constructor(characterName: string, level: number = 1) {
        super(characterName, level, 10);
    }

    attack(targetAC: number): boolean {
        console.log(`${this.characterName} attacks AC`, targetAC)
        const attack = DiceRoller.getD20(1);
        const result = attack > targetAC ? true : false;
        result ? console.log('Target hit!') : console.log('Missed...');
        return result;
    }

    damage(): number {
        const result = DiceRoller.getD8(1);
        console.log(`${this.characterName} caused`, result, 'damage')
        return result;
    }
}

const bob = new Warrior('Bob', 1)
console.log(bob)

