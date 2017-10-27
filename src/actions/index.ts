import {ThunkActionCreator} from "../index";
import {loaderOff, loaderOn} from "./loader";
import {getDevises} from "./devise";
import {onError} from "./on-error";

export const acceuilChain: ThunkActionCreator<void> = () => {
    return (dispatch) => {
        return dispatch(loaderOn())
            .then(() => dispatch(getDevises()))
            .catch((error: any) => onError(error, dispatch))
            .then(() => dispatch(loaderOff()));
    };
};
