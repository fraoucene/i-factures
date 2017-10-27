import {ServerError} from './error';
export class AuthorizationError implements ServerError {
    readonly message = 'Accès non autorisé';
}