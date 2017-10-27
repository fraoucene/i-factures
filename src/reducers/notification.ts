import {Notification, NotificationId} from '../beans/notification';
import {NotificationAction} from '../actions/notification';

export const notifications =
    (state: ReadonlyArray<Notification> = [], action: NotificationAction): ReadonlyArray<Notification> => {
        switch (action.type) {
            case 'ADD_NOTIFICATION':
                return action.notification ? state.concat(action.notification) : state;
            case 'REMOVE_NOTIFICATION':
                if (action.remove) {
                    const id: NotificationId = action.remove;
                    return state.filter(n => n.id !== id.value);
                }
                return state;
            default:
                return state;
        }
    };