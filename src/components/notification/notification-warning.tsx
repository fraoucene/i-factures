import * as React from 'react';
import {NotificationItem} from './notification-item';

interface Props {
    readonly title: string;
    readonly message: string;
    readonly onClick: () => void;
}

export const NotificationWarning = (props: Props) => (
    <NotificationItem {...props}
        color="rgb(235, 173, 26)"
        bgColor="rgb(249, 246, 240)"
        boxShadownColor="rgba(235, 173, 26, 0.901961)"
        crossBgColor="rgb(225, 207, 172)"
        crossColor="rgb(249, 246, 240)"
        time={30000}/>
);