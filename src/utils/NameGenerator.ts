import { uniqueNamesGenerator, Config, adjectives, names } from 'unique-names-generator';

export class NameGenerator {
    private static customConfig: Config = {
        dictionaries: [adjectives, names],
        separator: ' ',
        length: 2,
        style: 'capital',
    };

    static getName(): string {
        return uniqueNamesGenerator(this.customConfig);
    }
}
