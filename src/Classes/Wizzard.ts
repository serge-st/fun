import { Character } from './Character';

export class Wizzard extends Character {
    constructor(characterName: string, level: number = 1) {
        super(characterName, level, 6, 6, 2);
    }
}

const bobz = new Wizzard('Bobz')
bobz.damage()