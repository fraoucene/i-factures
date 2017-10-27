import * as React from "react";
import {connect} from "react-redux";
import {Page} from "../../../beans/page";
import {setPage} from "../../../actions/page";
import toPage = Page.toPage;
import {State} from "../../../reducers/index";

interface StateProps {
    readonly page: Page;
}

interface DispatchProps {
    readonly setPage: (page: Page) => void;
}

type Props = DispatchProps & StateProps;

const mapStateToProps = (state: State): StateProps => {
    return {
        page: state.page
    };
};

const mapDispatchToProps = (dispatch: Function): DispatchProps => {
    return {
        setPage: (page: Page) => dispatch(setPage(page)),
    };
};
export class HeaderInternal extends React.Component<Props, void> {
    render() {
        return (
            <div className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">

                        <a className="navbar-brand bl">
                            <img src={require('./ifacture.png')} className= "app-logo "/>
                            I Facture
                        </a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li className={this.props.page.id === Page.ACCEUIL ? "active" : ""}
                                onClick={() => this.props.setPage(toPage(Page.ACCEUIL))}>
                                <a className={this.props.page.id === Page.ACCEUIL ? "cUniv bl" : ""}>Acceuil</a></li>
                            <li  className={this.props.page.id === Page.FACTURE ? "active" : ""}
                                onClick={() => this.props.setPage(toPage(Page.FACTURE))}>
                                <a className={this.props.page.id === Page.FACTURE ? "cUniv bl" : ""}>Factures</a></li>
                            <li  className={this.props.page.id === Page.DEVIS ? "active" : ""}
                                onClick={() => this.props.setPage(toPage(Page.DEVIS))}>
                                <a className={this.props.page.id === Page.DEVIS ? "cUniv bl" : ""}>Devis</a></li>
                            <li  className={this.props.page.id === Page.RAPPORT ? "active" : ""}
                                onClick={() => this.props.setPage(toPage(Page.RAPPORT))}>
                                <a className={this.props.page.id === Page.RAPPORT ? "cUniv bl" : ""}>Rapports</a></li>
                            <li  className={this.props.page.id === Page.LOGIN ? "active" : ""}
                                onClick={() => this.props.setPage(toPage(Page.LOGIN))}>
                                <a className={this.props.page.id === Page.LOGIN ? "cUniv bl" : ""}>Login</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a>Support</a></li>
                            <li  className={this.props.page.id === Page.COMPTE ? "active" : ""}
                                onClick={() => this.props.setPage(toPage(Page.COMPTE))}>
                                <a className={this.props.page.id === Page.COMPTE ? "cUniv bl" : ""}>Mon Compte</a></li>
                            <li><a>Déconnection</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export const Header = connect(mapStateToProps ,mapDispatchToProps)(HeaderInternal);
