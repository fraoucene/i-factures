import * as React from 'react';
import {connect} from 'react-redux';

interface DispatchProps {
    readonly loadLoginPage: () => void;
}

type Props = DispatchProps;

const mapDispatchToProps = (): DispatchProps => {
    return {
        loadLoginPage: () => console.log("loadLoginPage...")
    };
};

class PageLoginInternal extends React.Component<Props, void> {

    componentWillMount(): void {
        this.props.loadLoginPage();
    }

    render() {
        return (
            <div className="login-wrapper">
                <div className="container small">
                    <div>
                        <img src={require('../common/header/ifacture.png')} className= "login-img"/>
                        <h3 className="cUniv bl">I Facture</h3>
                        <h4>
                            <span>Connexion à votre comptre</span>
                        </h4>
                        <p>Accédez à vos services iFacture avec un seul compte.</p>
                        <hr/>
                    </div>

                    <div>
                        <div className="form-group row">
                            <div className="col-sm-12">
                                <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-12">
                                <input type="password" className="form-control" id="inputPassword3"
                                       placeholder="Password" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-12">
                                <button type="button" className="btn btn-primary btn btn-block login-btn univ">
                                    SE CONNECTER</button>
                            </div>
                        </div>
                    </div>
                    <div className="mt">
                        <p>Nouvel utilisateur&nbsp;? <a>Créez votre compte</a></p>
                    </div>
                </div>
            </div>
            );
    }
}

export const PageLogin = connect(mapDispatchToProps)(PageLoginInternal);