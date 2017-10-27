import * as React from 'react';
import {connect} from 'react-redux';

interface DispatchProps {
    readonly loadDevisPage: () => void;
}

type Props = DispatchProps;

const mapDispatchToProps = (): DispatchProps => {
    return {
        loadDevisPage: () => console.log("loadDevisPage...")
    };
};

class PageDevisInternal extends React.Component<Props, void> {

    componentWillMount(): void {
        this.props.loadDevisPage();
    }

    render() {
        return (
            <span>
                Je Suis la page Devis
            </span>);
    }
}

export const PageDevis = connect(mapDispatchToProps)(PageDevisInternal);