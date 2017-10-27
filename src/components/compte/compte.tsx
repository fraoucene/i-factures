import * as React from 'react';
import {connect} from 'react-redux';

interface DispatchProps {
    readonly loadComptePage: () => void;
}

type Props = DispatchProps;

const mapDispatchToProps = (): DispatchProps => {
    return {
        loadComptePage: () => console.log("loadComptePage...")
    };
};

class PageCompteInternal extends React.Component<Props, void> {

    componentWillMount(): void {
        this.props.loadComptePage();
    }

    render() {
        return (
            <span>
                Je Suis la page Compte
            </span>);
    }
}

export const PageCompte = connect(mapDispatchToProps)(PageCompteInternal);