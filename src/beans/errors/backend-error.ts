import {ServerError} from './error';
export class BackendError implements ServerError {
    readonly message = 'Le serveur a généré une erreur.';
}