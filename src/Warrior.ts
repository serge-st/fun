import { Character } from './Character';

export class Warrior extends Character {
    constructor(characterName: string, level: number = 1) {
        super(characterName, level, 10, 8);
    }
}
