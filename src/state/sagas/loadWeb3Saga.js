import Web3 from'web3'
import { fetchWeb3, invalidWeb3, noWeb3, denyWeb3, waitingAprovalWeb3 } from './../actions/LoadWeb3Actions'
import { put, call, all } from 'redux-saga/effects'


function* loadWeb3Saga(){
    let web3
        if(!window.ethereum && !window.web3){
            return yield put(noWeb3())
        } else if (window.ethereum) {
          web3  = new Web3(window.ethereum);
          try{
            yield put(waitingAprovalWeb3())
            yield window.ethereum.enable()
          } catch(err){
            return  yield put(denyWeb3())
          }          
        } else if (window.web3) {
            web3 = new Web3(window.web3.currentProvider);
        }     
        try{        
          const [ network, userAddress ] = yield all([
            call(web3.eth.net.getNetworkType),
            call(web3.eth.getAccounts)
          ])
          const userBalance = yield call(web3.eth.getBalance, userAddress[0])
          console.log(network, userAddress, userBalance) 
          yield put(fetchWeb3(userAddress[0], network, userBalance))
        } catch(err){
          yield put(invalidWeb3(err))
        }                  
}

export default loadWeb3Saga