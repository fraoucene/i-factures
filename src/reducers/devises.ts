import {DevisesAction} from "../actions/devise";
import {Devise} from "../beans/devise";

export const devises = (state: ReadonlyArray<Devise> = [], action: DevisesAction) => {
    if (action.type === 'SET_DEVISES') {
        return action.devises;
    }
    return state;
};
