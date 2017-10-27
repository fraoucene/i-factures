import * as React from 'react';
import {connect} from 'react-redux';

interface DispatchProps {
    readonly loadFacturesPage: () => void;
}

type Props = DispatchProps;

const mapDispatchToProps = (): DispatchProps => {
    return {
        loadFacturesPage: () => console.log("loadFacturesPage...")
    };
};

class PageFacturesInternal extends React.Component<Props, void> {

    componentWillMount(): void {
        this.props.loadFacturesPage();
    }

    render() {
        return (
            <span>
                Je Suis la page Factures
            </span>);
    }
}

export const PageFactures = connect(mapDispatchToProps)(PageFacturesInternal);