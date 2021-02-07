import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { HashRouter ,Link} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import '../../../react-admin/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '../styles/theme.scss';
import LayoutComponent from '../components/Layout';
//import DocumentationLayoutComponent from '../documentation/DocumentationLayout';
import Login from '../pages/login';
import Register from '../pages/register';
import { logoutUser } from '../actions/user';

const PrivateRoute = ({dispatch, component, ...rest }) => {

        // dispatch(logoutUser());
        return (<Redirect to="/login"/>)





        // return ( // eslint-disable-line
        //     <Route {...rest} render={props => (React.createElement(component, props))}/>
        // );

};



class App extends React.PureComponent {
    render() {
        return (
            <div>

                <HashRouter>
                    {/*<Switch>*/}
                    {/*    <Route path="/" exact render={() => <Redirect to="/app/main"/>}/>*/}
                    {/*    <Route path="/app" exact render={() => <Redirect to="/app/main"/>}/>*/}
                    {/*    <PrivateRoute path="/app" dispatch={this.props.dispatch} component={LayoutComponent}/>*/}
                    {/*    <Route path="/documentation" exact*/}
                    {/*           render={() => <Redirect to="/documentation/getting-started/overview"/>}/>*/}
                    {/*    /!* <Route path="/documentation" component={DocumentationLayoutComponent}/> *!/*/}
                    {/*    <Route path="/register" exact component={Register}/>*/}
                    {/*    <Route path="/login" exact component={Login}/>*/}
                    {/*    <Route path="/error" exact component={ErrorPage}/>*/}
                    {/*</Switch>*/}
                    <div className="App">
                        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                            <div className="container">
                                <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link>
                                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link" to={"/sign-in"}>Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                        <div className="auth-wrapper">
                            <div className="auth-inner">
                                <Switch>
                                    <Route exact path='/' component={Login} />
                                    <Route path="/sign-in" component={Login} />
                                    {/*<Route path="/sign-up" component={SignUp} />*/}
                                </Switch>
                            </div>
                        </div>
                    </div>


                </HashRouter>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
