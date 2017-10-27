import * as React from 'react';
import {connect} from 'react-redux';

interface DispatchProps {
    readonly loadRapportPage: () => void;
}

type Props = DispatchProps;

const mapDispatchToProps = (): DispatchProps => {
    return {
        loadRapportPage: () => console.log("loadRapportPage...")
    };
};

class PageRapportInternal extends React.Component<Props, void> {

    componentWillMount(): void {
        this.props.loadRapportPage();
    }

    render() {
        return (
            <span>
                Je Suis la page Rapport
            </span>);
    }
}

export const PageRapport = connect(mapDispatchToProps)(PageRapportInternal);