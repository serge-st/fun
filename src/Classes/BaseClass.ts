import { DiceRoller, DiceRollerKeys, DiceValues } from '../utils/DiceRoller';

export abstract class BaseClass {
    characterName: string;
    level: number;
    hitDice: DiceValues;
    hitpoints: number;
    damageDice: DiceValues;
    damageRolls: number;
    armorClass: number;
    isAlive: boolean;

    constructor(
        characterName: string,
        level: number = 1,
        hitDice: DiceValues = 8,
        armorClass: number,
        damageDice: DiceValues = 4,
        damageRolls: number = 1,
        isAlive: boolean = true,
    ) {
        this.characterName = characterName;
        this.level = level;
        this.hitDice = hitDice;
        this.hitpoints = this.generateInitialHitpoints();
        this.armorClass = armorClass;
        this.damageDice = damageDice;
        this.damageRolls = damageRolls;
        this.isAlive = isAlive;
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

    causeDamage(): number {
        const diceGetterName: DiceRollerKeys = `getD${this.damageDice}`;
        const result = DiceRoller[diceGetterName](this.damageRolls);
        console.log(`${this.characterName} caused`, result, 'damage')
        return result;
    }

    receiveDamage(hits: number): void {
        console.log(`${this.characterName} received`, hits, 'HP of damage');
        this.hitpoints -= hits;
        this.isAliveCheck();
    }

    isAliveCheck(): void {
        if (this.hitpoints <= 0) {
            console.log(`${this.characterName} dies...`);
            this.isAlive = false;
        } else {
            console.log(`${this.characterName} has`, this.hitpoints, 'left');
        }
    }
}

