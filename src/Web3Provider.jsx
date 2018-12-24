import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sagaWeb3Load } from './state/actions/LoadWeb3Actions'
import { Redirect } from 'react-router-dom';
import { CircularProgress, Grid, CardHeader, Card, CardContent } from '@material-ui/core';


class Web3Provider extends Component{
    componentDidMount() {
      this.props.sagaWeb3Load()
    }

    renderMensagem(){
      if(this.props.walletLoad === undefined){
        return(
          <CircularProgress />
        )
      } else if(this.props.walletLoad === false ){
        return(
          <p>{this.props.msg}</p>
        )
      }      
    }
    
    render() {
      if(this.props.walletLoad === true){
        return (
          <Redirect to={`/dashboard`} />
        )  
      }
          return (
            <Grid container justify="center"  alignItems="center">
              <Card>
                <CardHeader subheader={'Few Nickels Login'} />
                <CardContent justify="center" >
                  {this.renderMensagem()}
                </CardContent>
              </Card>   
            </Grid>
          )
        }
        
      
    
    

}


const mapStateToProps = state => {
  return{
    walletLoad: state.web3Redux.walletLoad,
    userAddress: state.web3Redux.userAddress,
    networkEthereum:  state.web3Redux.networkEthereum,
    msg:  state.web3Redux.msg,

  }};
  
  const mapDispatchToProps = dispatch => (
    bindActionCreators({ sagaWeb3Load }, dispatch)
  );

  export default connect(mapStateToProps, mapDispatchToProps)(Web3Provider)
