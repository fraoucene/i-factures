import * as React from 'react';
import {State} from '../reducers/index';
import {connect} from 'react-redux';
import {Theme} from "../theme/index";

const spinnerContainer = {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    width: '120px',
    height: '120px'
};

const spinner = {
    border: '16px solid #f3f3f3',
    borderTop: '16px solid' + Theme.colors.nav,
    borderRadius: '50%',
    width: '120px',
    height: '120px',
    animation: 'spin 1.5s linear infinite',
    zIndex: 100
};
const window = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    bottom: 0,
    zIndex: 1000,
    backgroundColor: 'grey',
    opacity: .8
};

interface StateProps {
    readonly loader: boolean;
}

type Props = StateProps;

const mapStateToProps = (state: State): StateProps => {
    return {
        loader: state.loader
    };
};

const Loader_ = ({loader}: Props) => (
    <div>
        {
            loader ?
                <div style={window}>
                    <div style={spinnerContainer}>
                        <div style={spinner}/>
                    </div>
                </div>
                : null
        }
    </div>);

export const Loader = connect(mapStateToProps)(Loader_);