import { BaseClass } from './BaseClass';

export class Wizzard extends BaseClass {
    constructor(characterName: string, level: number = 1) {
        super(characterName, level, 6, 10, 6, 2);
    }
}
