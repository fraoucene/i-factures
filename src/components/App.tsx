import * as React from 'react';
import * as H from 'history';
require('./app.css');
import {connect} from "react-redux";
import {MyHistory, setHistory} from "../actions/history";
import {State} from "../reducers/index";
import {Header} from './common/header/index';
import {Page} from "../beans/page";
import {PageAcceuil} from "./acceuil/acceuil";
import {PageDevis} from "./devis/devis";
import {PageFactures} from "./factures/factures";
import {PageRapport} from "./rapport/rapport";
import {PageCompte} from "./compte/compte";
import {setPage} from "../actions/page";
import {Notifier} from "./notification/notifier";
import {Loader} from "./loader";
import {extractPage} from "../reducers/utils/url-utils";
import {PageLogin} from "./login/compte";

interface LocalState {
}

interface OwnProps {
    readonly myHistory: MyHistory;
}

interface StateProps {
    readonly history: MyHistory;
    readonly page: Page;
}

interface DispatchProps {
    readonly setHistory: (h: H.History) => void;
    readonly setPage: (page: Page) => void;
}

const mapStateToProps = (state: State): StateProps => {
    return {
        history: state.history,
        page: state.page
    };
};

const mapDispatchToProps = (dispatch: Function): DispatchProps => {
    return {
        setHistory: (history: H.History) => dispatch(setHistory(history)),
        setPage: (page: Page) => dispatch(setPage(page)),
    };
};
type Props = StateProps & DispatchProps & OwnProps;

export class AppInternal extends React.Component<Props, LocalState> {
    constructor(props: Props) {
        super(props);
        const page = Page.toPage(extractPage(props.myHistory.location.pathname));
        if (props.myHistory) {
            this.props.setHistory(props.myHistory);
            this.props.setPage(page);
        }
        this.state = {module};
    }

    componentWillReceiveProps(nextProps: Readonly<Props>): void {
        if (nextProps.history) {
            this.props.setHistory(nextProps.history);
            this.props.myHistory.push('/ifacture/' + nextProps.page.id);
        }
    }

    render() {
        console.log("page", this.props.page);
        return (
            <div>
                <Header/>
                <div style={{height: '100%', width: '100%'}}>
                    {
                        this.props.page.id === Page.ACCEUIL && <PageAcceuil /> ||
                        this.props.page.id === Page.FACTURE && <PageFactures /> ||
                        this.props.page.id === Page.DEVIS && <PageDevis /> ||
                        this.props.page.id === Page.RAPPORT && <PageRapport /> ||
                        this.props.page.id === Page.COMPTE && <PageCompte /> ||
                        this.props.page.id === Page.LOGIN && <PageLogin />
                    }
                </div>
                <Loader/>
                <Notifier/>
            </div>
        );
    }
}
export const App = connect(mapStateToProps, mapDispatchToProps)(AppInternal) as React.ComponentClass<OwnProps>;