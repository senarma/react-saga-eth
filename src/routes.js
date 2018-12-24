import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import Web3Provider from './Web3Provider';
import UserDashboardContainer from './containers/UserDashboardContainer'
import Drawer from './containers/Drawer';

const PrivateRoute = ({walletLoad, component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        walletLoad ? (
            <Component {...props} />
        ) : (
            <Redirect to={"/"} />
        )
    )} />
)

const Routes = props => (
        <BrowserRouter>
            <Switch>
                
                <Route exact path="/" component={Web3Provider} />

                <PrivateRoute path="/dashboard" walletLoad={props.walletLoad} component={UserDashboardContainer} />
                
                <Route path='*' component={() => {return(<h1>404 error</h1>)}} />

            </Switch>
        </BrowserRouter>
)

const mapStateToProps = state => {
    return{
      walletLoad: state.web3Redux.walletLoad,
      userAddress: state.web3Redux.userAddress,
      networkEthereum:  state.web3Redux.networkEthereum,
    }};

export default connect(mapStateToProps)(Routes)

