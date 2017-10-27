import * as React from 'react';
import {connect} from 'react-redux';
import {Notification, NotificationId, Error, Warning} from '../../beans/notification';
import {State} from '../../reducers/index';
import {removeNotification} from '../../actions/notification';
import {NotificationError} from './notification-error';
import {NotificationInfo} from './notification-info';
import {NotificationWarning} from './notification-warning';

interface StateProps {
    readonly notifications: ReadonlyArray<Notification>;
}

interface DispatchProps {
    readonly removeNotification: (id: NotificationId) => void;
}

type Props = StateProps & DispatchProps;

const mapStateToProps = (state: State): StateProps => {
    return {
        notifications: state.notifications
    };
};

const mapDispatchToProps = (dispatch: Function): DispatchProps => {
    return {
        removeNotification: (id: NotificationId) => dispatch(removeNotification(id))
    };
};

class NotifierInternal extends React.Component<Props, void> {
    render() {
        return ( <div style={{
            display: 'flex',
            flexDirection: 'column-reverse',
            position: 'fixed',
            bottom: '10px',
            right: '10px',
            zIndex: 1000
        }}>
            {
                this.props.notifications.map(n => this.renderNotif(n))
            }
        </div>);
    }

    private renderNotif(notif: Notification) {
        if (notif instanceof Error) {
            return <NotificationError {...notif}
                key={notif.id}
                onClick={() => this.props.removeNotification(new NotificationId(notif.id))}
            />;
        } else if (notif instanceof Warning) {
            return <NotificationWarning {...notif}
                key={notif.id}
                onClick={() => this.props.removeNotification(new NotificationId(notif.id))}
            />;
        } else {
            return <NotificationInfo {...notif}
                key={notif.id}
                onClick={() => this.props.removeNotification(new NotificationId(notif.id))}
            />;
        }
    }
}

export const Notifier = connect(mapStateToProps, mapDispatchToProps)(NotifierInternal);