import { BaseClass } from './BaseClass';

export class Warrior extends BaseClass {
    constructor(characterName: string, level: number = 1) {
        super(characterName, level, 10, 10, 8);
    }
}
