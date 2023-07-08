import { Character } from './Character';

export class Wizzard extends Character {
    constructor(characterName: string, level: number = 1) {
        super(characterName, level, 6, 10, 6, 2);
    }
}
