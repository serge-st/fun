import { DiceValues, DiceRoller } from './DiceRoller';

export class Warrior {
    hitDice: DiceValues = 10;
    attackDamageDice: DiceValues = 8;
    level: number;
    characterName: string;
    hitpoints: number;

    constructor(characterName: string, level: number = 1) {
        this.characterName = characterName;
        this.level = level;
        this.hitpoints = this.generateInitialHitpoints();
    }

    generateInitialHitpoints(): number {
        console.log(`Generating hitpoints for ${this.characterName} at level`, this.level);
        if (this.level < 1) throw new Error('Level cannot be less that 1');
        if (this.level === 1) return this.hitDice;

        const rollCount = this.level - 1;
        return this.hitDice + DiceRoller.getD10(rollCount);
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

const bob = new Warrior('Bob', 4);
console.log(bob)
bob.attack(12) ? bob.damage() : null