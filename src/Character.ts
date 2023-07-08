import { DiceRoller, DiceRollerKeys, DiceValues } from './DiceRoller';

export abstract class Character {
    characterName: string;
    level: number;
    hitDice: DiceValues;
    hitpoints: number;
    damageDice: DiceValues;
    damageRolls: number;

    constructor(
        characterName: string,
        level: number = 1,
        hitDice: DiceValues = 8,
        damageDice: DiceValues = 4,
        damageRolls: number = 1,
    ) {
        this.characterName = characterName;
        this.level = level;
        this.hitDice = hitDice;
        this.hitpoints = this.generateInitialHitpoints();
        this.damageDice = damageDice;
        this.damageRolls = damageRolls;
    }

    generateInitialHitpoints(): number {
        console.log(`Generating hitpoints for ${this.characterName} at level`, this.level);
        if (this.level < 1) throw new Error('Level cannot be less that 1');
        if (this.level === 1) return this.hitDice;

        const rollCount = this.level - 1;
        const diceGetterName: DiceRollerKeys = `getD${this.hitDice}`;
        return this.hitDice + DiceRoller[diceGetterName](rollCount);
    }

    attack(targetAC: number): boolean {
        console.log(`${this.characterName} attacks AC`, targetAC)
        const attack = DiceRoller.getD20(1);
        const result = attack > targetAC ? true : false;
        result ? console.log('Target hit!') : console.log('Missed...');
        return result;
    }

    damage(): number {
        const diceGetterName: DiceRollerKeys = `getD${this.damageDice}`;
        const result = DiceRoller[diceGetterName](this.damageRolls);
        console.log(`${this.characterName} caused`, result, 'damage')
        return result;
    }
}

