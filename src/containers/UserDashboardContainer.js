import React, { Component } from 'react';
import { Grid,  Card, Avatar } from '@material-ui/core';
import makeBlockie from 'ethereum-blockies-base64';
import { connect } from 'react-redux';
import DashboardTheme from './DashboardTheme';

const NetworkConnected = ({network}) => {
    switch(network){
        case 'ropsten': return <Grid container justify="center">You are on Ethereum Ropsten Testnet</Grid>
        case 'main': return <Grid container justify="center">You are on Ethereum Mainnet</Grid>
        case 'kovan': return <Grid container justify="center">You are on Ethereum Kovan Testnet</Grid>
        case 'rinkeby': return <Grid container justify="center">You are on Ethereum Rinkeby Testnet</Grid>
        default: return null
    }
    
}

const Teste = props => {
    const { networkEthereum, userAddress } = props.data
    return (
        <Grid container>
            <Card>
                <Avatar style={{alignSelf: 'center'}} src={makeBlockie(userAddress)} />
                <p>{userAddress}</p>
            </Card>
        </Grid>
    )
}
 

const UserDashboardContainer = props => {
    return (
            <DashboardTheme 
                component={<Teste data={props}/> } 
                userAddress={props.userAddress}
                networkStatus={<NetworkConnected network={props.networkEthereum} />} 
            />
    )
} 


const mapStateToProps = state => {
    return{
      walletLoad: state.web3Redux.walletLoad,
      userAddress: state.web3Redux.userAddress,
      networkEthereum:  state.web3Redux.networkEthereum, 
    }};

export default connect(mapStateToProps, null)(UserDashboardContainer)

