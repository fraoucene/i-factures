import * as React from 'react';
import {connect} from 'react-redux';
import {acceuilChain} from "../../actions/index";
import {Devise} from "../../beans/devise";
import {State} from "../../reducers/index";

interface DispatchProps {
    readonly loadAcceuilPage: () => void;
}

interface StateProps {
    readonly devises: ReadonlyArray<Devise>;
}

type Props = DispatchProps & StateProps;


const mapStateToProps = (state: State): StateProps => {
    return {
        devises: state.devises
    };
};


const mapDispatchToProps = (dispatch: Function): DispatchProps => {
    return {
        loadAcceuilPage: () => dispatch(acceuilChain())
    };
};

class PageAcceuilInternal extends React.Component<Props, void> {

    componentWillMount(): void {
        this.props.loadAcceuilPage();
    }

    render() {

        return (
            <span>
                Je Suis la page Acceuil
                {this.props.devises.map((d, index) => <div key={index}>{d.id} - {d.label}</div> )}
            </span>);
    }
}

export const PageAcceuil = connect(mapStateToProps, mapDispatchToProps)(PageAcceuilInternal);