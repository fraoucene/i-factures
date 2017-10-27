import {Notification, NotificationId, Error, Warning} from '../beans/notification';
import {ThunkActionCreator} from '../index';
export interface NotificationAction {
    readonly type: string;
    readonly notification?: Notification;
    readonly remove?: NotificationId;
}

export const removeNotification = (id: NotificationId): NotificationAction => {
    return {type: 'REMOVE_NOTIFICATION', remove: id};
};

export const addError: ThunkActionCreator<Promise<void>> =
    (message: string) => {
        return dispatch => {
            dispatch({
                type: 'ADD_NOTIFICATION',
                notification: new Error(new Date().getMilliseconds().toString(), 'Erreur', message)
            });
            return Promise.resolve();
        };
    };

export const addInfo: ThunkActionCreator<Promise<void>> =
    (message: string) => {
        return dispatch => {
            dispatch({
                type: 'ADD_NOTIFICATION',
                notification: new Notification(new Date().getMilliseconds().toString(), 'Info', message)
            });
            return Promise.resolve();
        };
    };

export const addWarning: ThunkActionCreator<Promise<void>> =
    (message: string) => {
        return dispatch => {
            dispatch({
                type: 'ADD_NOTIFICATION',
                notification: new Warning(new Date().getMilliseconds().toString(), 'Avertissement', message)
            });
            return Promise.resolve();
        };
    };