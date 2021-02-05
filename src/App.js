import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import ErrorPage from '../pages/error';

import '../styles/theme.scss';
//import DocumentationLayoutComponent from '../documentation/DocumentationLayout';
import Login from '../pages/login';
import Register from '../pages/register';
import { logoutUser } from '../actions/user';
import SideBar from "./components/SiderBar/SideBar";

const PrivateRoute = ({dispatch, component, ...rest }) => {
  // if (!Login.isAuthenticated(localStorage.getItem('id_token'))) {
  //     dispatch(logoutUser());
  //     return (<Redirect to="/login"/>)
  // }

  // else {


  return ( // eslint-disable-line
      <Route {...rest} render={props => (React.createElement(component, props))}/>
  );
  // }
};

const CloseButton = ({closeToast}) => <i onClick={closeToast} className="la la-close notifications-close"/>

class App extends React.PureComponent {
  render() {
    return (

<SideBar/>

    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
