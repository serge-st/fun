import { DiceRoller, DiceRollerKeys, DiceValues } from './DiceRoller';

export abstract class Character {
    characterName: string;
    level: number;
    hitDice: DiceValues;
    hitpoints: number;

    constructor(characterName: string, level: number = 1, hitDice: DiceValues = 8) {
        this.characterName = characterName;
        this.level = level;
        this.hitDice = hitDice;
        this.hitpoints = this.generateInitialHitpoints();
    }

    generateInitialHitpoints(): number {
        console.log(`Generating hitpoints for ${this.characterName} at level`, this.level);
        if (this.level < 1) throw new Error('Level cannot be less that 1');
        if (this.level === 1) return this.hitDice;

        const rollCount = this.level - 1;
        const diceGetterName: DiceRollerKeys = `getD${this.hitDice}`;
        return this.hitDice + DiceRoller[diceGetterName](rollCount);
    }
}

