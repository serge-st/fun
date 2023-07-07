export class Warrior {
    hitDice: number = 10;
    attackDamageDice: number = 8;
    level: number;
    characterName: string;
    hitpoints: number;

    constructor(characterName: string, level: number = 1) {
        this.characterName = characterName;
        this.level = level;
        this.hitpoints = this.generateInitialHitpoints();
    }

    generateInitialHitpoints(): number {
        if (this.level === 1) return this.hitDice;
        // if (this.level > 1) return // array from rolls with 1st max
        if (this.level > 1) return 2 // test
        if (this.level < 1) throw new Error('Level cannot be less that 1');
        throw new Error('Unknown error')
    }
}
