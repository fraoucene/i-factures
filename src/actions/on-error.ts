import {isServerError, ServerError} from '../beans/errors/error';
import {addError} from './notification';

export const onError = (error: any, dispatch: Function) => {
    if (isServerError(error)) {
        return dispatch(addError((error as ServerError).message));
    } else {
        return dispatch(addError(error.toString()));
    }
};
