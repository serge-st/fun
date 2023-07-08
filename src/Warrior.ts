import { Character } from './Character';

export class Warrior extends Character {
    constructor(characterName: string, level: number = 1) {
        super(characterName, level, 10);
    }
}

const bob = new Warrior('Bob', 1)
console.log(bob)

// export class Warrior {
//     level: number;
//     characterName: string;
//     hitpoints: number;
//     hitDice: DiceValues = 10;
//     attackDamageDice: DiceValues = 8;

//     constructor(characterName: string, level: number = 1) {
//         this.characterName = characterName;
//         this.level = level;
//         this.hitpoints = this.generateInitialHitpoints();
//     }

//     generateInitialHitpoints(): number {
//         console.log(`Generating hitpoints for ${this.characterName} at level`, this.level);
//         if (this.level < 1) throw new Error('Level cannot be less that 1');
//         if (this.level === 1) return this.hitDice;

//         const rollCount = this.level - 1;
//         const diceGetterName: DiceRollerKeys = `getD${this.hitDice}`;
//         return this.hitDice + DiceRoller[diceGetterName](rollCount);
//     }

//     attack(targetAC: number): boolean {
//         console.log(`${this.characterName} attacks AC`, targetAC)
//         const attack = DiceRoller.getD20(1);
//         const result = attack > targetAC ? true : false;
//         result ? console.log('Target hit!') : console.log('Missed...');
//         return result;
//     }

//     damage(): number {
//         const result = DiceRoller.getD8(1);
//         console.log(`${this.characterName} caused`, result, 'damage')
//         return result;
//     }
// }

// const bob = new Warrior('Bob', 4);
// console.log(bob)
// bob.attack(12) ? bob.damage() : null