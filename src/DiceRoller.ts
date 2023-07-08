export type DiceValues = 4 | 6 | 8 | 10 | 12 | 20;
export type DiceRollerKeys = keyof typeof DiceRoller;

export class DiceRoller {
    private static rollD(value: DiceValues): number {
        return Math.ceil(Math.random() * value);
    }

    private static getResult(rollsNumber: number, diceValue: DiceValues): number {
        const rolls = Array.from({ length: rollsNumber }, () => this.rollD(diceValue));
        const result = rolls.reduce((acc, curr) => acc + curr);
        console.log('Rolled:', rolls, '=> Total:', result);
        return result;
    }

    @logDiceRolls()
    static getD4(times: number): number {
        return this.getResult(times, 4);
    }

    @logDiceRolls()
    static getD6(times: number): number {
        return this.getResult(times, 6);
    }

    @logDiceRolls()
    static getD8(times: number): number {
        return this.getResult(times, 8);
    }

    @logDiceRolls()
    static getD10(times: number): number {
        return this.getResult(times, 10);
    }

    @logDiceRolls()
    static getD12(times: number): number {
        return this.getResult(times, 12);
    }

    @logDiceRolls()
    static getD20(times: number): number {
        return this.getResult(times, 20);
    }
}

function logDiceRolls() {
    return function (_target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        const dice = propertyKey.replace('get', '');

        descriptor.value = function (...args: any[]) {
            const [rollNumber] = args;

            if (rollNumber === 1) {
                console.log(`Rolling ${dice} once...`);
            } else {
                console.log(`Rolling ${dice}`, rollNumber, 'times...');
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
