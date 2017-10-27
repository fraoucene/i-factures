import * as React from 'react';
import {NotificationItem} from './notification-item';

interface Props {
    readonly title: string;
    readonly message: string;
    readonly onClick: () => void;
}

export const NotificationInfo = (props: Props) => (
    <NotificationItem {...props}
        color="rgb(94, 164, 0)"
        bgColor="rgb(240, 245, 234)"
        boxShadownColor="rgba(94, 164, 0, 0.901961)"
        crossBgColor="rgb(172, 202, 146)"
        crossColor="rgb(240, 245, 234)"
        time={3000}/>
);