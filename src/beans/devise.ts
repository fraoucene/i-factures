export class Devise {
    readonly id: string;
    readonly label: string;

    constructor(id: string, label: string) {
        this.id = id;
        this.label = label;
    }

    static NULL = new Devise('NULL', 'NULL');
}

export class DeviseId {
    readonly value: string;

    constructor(value: string) {
        this.value = value;
    }

    static NULL = new DeviseId('NULL');
}