export interface ServerError {
    readonly message: string;
}

export function isServerError(object: any): object is ServerError {
    return 'message' in object;
}
