export class Notification {
    readonly id: string;
    readonly title: string;
    readonly message: string;

    constructor(id: string,
                title: string,
                message: string) {
        this.id = id;
        this.title = title;
        this.message = message;
    }
}

export class NotificationId {
    readonly value: string;

    constructor(value: string) {
        this.value = value;
    }
}

export class Error extends Notification {
    constructor(id: string,
                title: string,
                message: string) {
        super(id, title, message);
    }
}

export class Warning extends Notification {
    constructor(id: string,
                title: string,
                message: string) {
        super(id, title, message);
    }
}