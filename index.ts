const CharacterClass = {
    warrior: 'Warrior',
    barbarian: 'Barbarian',
    cleric: 'Cleric',
    mage: 'Mage',
    peasant: 'Peasant',
} as const;

type CharacterClassKeys = keyof typeof CharacterClass;
type CharacterClassValues = typeof CharacterClass[CharacterClassKeys]

abstract class Character {
    characterName: string;
    className: string;
    hitpoints: number;
    level: number;
    hitDice: number;
    attackName: string;
    attackDamage: number;

    constructor(
        characterName: string,
        level: number,
        className: CharacterClassValues = 'Peasant',
        attackName: string = 'punch',
        attackDamage: number = 4,
    ) {
        this.characterName = characterName;
        this.className = className;
        this.level = level;
        this.hitDice = this.setHitDice();
        this.attackName = attackName;
        this.attackDamage = attackDamage;
        this.hitpoints = this.level * this.hitDice;
    }

    private setHitDice(): number {
        switch (this.className) {
            case 'Warrior':
                return 10;
            case 'Barbarian':
                return 12;
            case 'Cleric':
                return 8;
            case 'Mage':
                return 6;
            default:
                return 8;
        }
    }

    hitOponent(oponent: Character): number {
        const damage = Math.ceil(Math.random() * this.attackDamage);
        console.log(`${oponent.characterName} gets a ${damage} hitpoint ${this.attackName}`);
        return damage;
    }

    public setHitpoints(count: number) {
        this.hitpoints = count;
    }

    receiveDamage(damage: number): void {
        this.setHitpoints(this.hitpoints - damage);
    }
}

class Warrior extends Character {
    constructor(name: string, level: number, className?: CharacterClassValues, attackName?: string, attackDamage?: number) {
        super(name, level, className, attackName, attackDamage)
    }
}

const bob = new Warrior('Bob', 1, 'Warrior', 'stab', 8);
const sam = new Warrior('Sam', 1);

console.log(bob)
console.log('before damage', sam)

sam.receiveDamage(bob.hitOponent(sam))

console.log('after damage', sam)


// console.log(Math.ceil(Math.random() * 6))