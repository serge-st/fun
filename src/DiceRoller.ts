export class DiceRoller {
    private static rollD(value: number): number {
        return Math.ceil(Math.random() * value);
    }

    private static getFinalResult(rolls: number[]): number {
        console.log('Result:', rolls);
        return rolls.reduce((acc, curr) => acc + curr);
    }

    @logDiceRolls()
    static getD4(times: number): number {
        const result = this.getFinalResult(Array.from({ length: times }, () => this.rollD(4)));
        return result;
    }

    @logDiceRolls()
    static getD6(times: number): number {
        const result = this.getFinalResult(Array.from({ length: times }, () => this.rollD(6)));
        return result;
    }

    @logDiceRolls()
    static getD8(times: number): number {
        const result = this.getFinalResult(Array.from({ length: times }, () => this.rollD(8)));
        return result;
    }

    @logDiceRolls()
    static getD10(times: number): number {
        const result = this.getFinalResult(Array.from({ length: times }, () => this.rollD(10)));
        return result;
    }

    @logDiceRolls()
    static getD12(times: number): number {
        const result = this.getFinalResult(Array.from({ length: times }, () => this.rollD(12)));
        return result;
    }

    @logDiceRolls()
    static getD20(times: number): number {
        const result = this.getFinalResult(Array.from({ length: times }, () => this.rollD(20)));
        return result;
    }
}

function logDiceRolls() {
    return function (_target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        const die = propertyKey.replace('get', '');

        descriptor.value = function (...args: any[]) {
            const [rollNumber] = args;

            if (rollNumber === 1) {
                console.log(`Rolling ${die} once...`);
            } else {
                console.log(`Rolling ${die} ${rollNumber} times...`);
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}

const resD20 = DiceRoller.getD20(1);
console.log(resD20)
console.log('-------')

const res2D8 = DiceRoller.getD8(2)
console.log(res2D8)