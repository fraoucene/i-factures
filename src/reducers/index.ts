import {combineReducers} from 'redux';
import {loader} from "./loader";
import {history} from "./history";
import {MyHistory} from '../actions/history';
import {page} from "./page";
import {Page} from "../beans/page";
import {devises} from "./devises";
import {Devise} from "../beans/devise";
import {notifications} from "./notification";
import {Notification} from '../beans/notification';

export const reducer = combineReducers<State>({
    page,
    devises,
    notifications,
    loader,
    history,
});

export interface State {
    readonly page: Page;
    readonly devises: ReadonlyArray<Devise>;
    readonly notifications: ReadonlyArray<Notification>;
    readonly loader: boolean;
    readonly history: MyHistory;
};