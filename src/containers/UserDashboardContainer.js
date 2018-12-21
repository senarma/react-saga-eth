import React, { Component } from 'react';
import { Grid,  Card, Avatar } from '@material-ui/core';
import makeBlockie from 'ethereum-blockies-base64';
import { connect } from 'react-redux';

const NetworkConnected = (network) => {
    console.log(network.network)
    switch(network.network){
        case 'ropsten': return <p>You are on Ethereum Ropsten Testnet</p>
        case 'main': return <p>You are on Ethereum Mainnet</p>
        case 'kovan': return <p>You are on Ethereum Kovan Testnet</p>
        case 'rinkeby': return <p>You are on Ethereum Rinkeby Testnet</p>
        default: return null
    }
    
}


const UserDashboardContainer = props => (
    <Grid container justify="center">
        <Card>
            <NetworkConnected network={props.networkEthereum}/>
            <Avatar style={{alignSelf: 'center'}} src={makeBlockie(props.userAddress)} />
            <p>{props.userAddress}</p>
        </Card>
    </Grid>

)

const mapStateToProps = state => {
    return{
      walletLoad: state.web3Redux.walletLoad,
      userAddress: state.web3Redux.userAddress,
      networkEthereum:  state.web3Redux.networkEthereum, 
    }};

export default connect(mapStateToProps, null)(UserDashboardContainer)

