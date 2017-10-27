import * as React from 'react';
import {NotificationItem} from './notification-item';

interface Props {
    readonly title: string;
    readonly message: string;
    readonly onClick: () => void;
}

export const NotificationError = (props: Props) => (
    <NotificationItem {...props}
        color="rgb(236, 61, 61)"
        bgColor="rgb(244, 233, 233)"
        boxShadownColor="rgba(236, 61, 61, 0.901961)"
        crossBgColor="rgb(228, 190, 190)"
        crossColor="rgb(244, 233, 233)"
        time={30000}/>
);