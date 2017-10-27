import {ServerError} from './error';
export class AuthenticationError implements ServerError {
    readonly message = 'Echec d\'authentification';
}