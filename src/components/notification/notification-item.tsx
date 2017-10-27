import * as React from 'react';
import {setTimeout} from 'timers';

interface Props {
    readonly title: string;
    readonly message: string;
    readonly onClick: () => void;
    readonly color: string;
    readonly bgColor: string;
    readonly boxShadownColor: string;
    readonly crossBgColor: string;
    readonly crossColor: string;
    readonly time: number;
}

export class NotificationItem extends React.Component<Props, void> {

    timeout: NodeJS.Timer | number;

    private onClick() {
        clearTimeout(this.timeout as number);
        this.props.onClick();
    }

    componentDidMount(): void {
        this.timeout = setTimeout(this.props.onClick, this.props.time);
    }

    render() {
        return (
            <div style={{
                    position: 'relative',
                    minWidth: '250px',
                    cursor: 'pointer',
                    borderRadius: '2px',
                    fontSize: '13px',
                    margin: '10px 0 0',
                    padding: '10px',
                    borderTop: '2px solid ' + this.props.color,
                    backgroundColor: this.props.bgColor,
                    color: 'rgb(65, 47, 47)',
                    boxShadow: this.props.boxShadownColor + ' 0px 0px 1px'
                    }}
                 onClick={this.onClick.bind(this)}>
                <div >
                    <h4 style={{fontSize: '14px',
                         margin: '0px 0px 10px',
                         paddingRight: '20px',
                         fontWeight: 'bold',
                         color:  this.props.color
                        }}>
                        {this.props.title}
                    </h4>
                    <div style={{margin: '0', padding: '0'}}>
                        {this.props.message}
                    </div>
                    <span style={{
                            fontSize: '17px',
                            position: 'absolute',
                            top: '4px',
                            right: '5px',
                            lineHeight: '15px',
                            backgroundColor: this.props.crossBgColor,
                            color: this.props.crossColor,
                            borderRadius: '50%',
                            width: '14px',
                            height: '14px',
                            fontWeight: 'bold',
                            textAlign: 'center'}}>
                        &times;
                    </span>
                </div>
            </div>
        );
    }
}