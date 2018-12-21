export default function web3Redux(state = {}, action){

  switch(action.type){
        case 'WEB3_LOAD':
            return Object.assign({}, state,
            {
              userAddress:action.address, 
              networkEthereum: action.network, 
              balanceEther: action.balance,
              walletLoad: action.status
        })

        case 'INVALID_WEB3_LOAD':
            return Object.assign({}, state,
            {
              msg: action.msg,
              walletLoad: action.status
        })

        case 'NO_WEB3':
          return Object.assign({}, state,
          {
            msg: action.msg,
            walletLoad: action.status
        })

        case 'DENY_WEB3':
         return Object.assign({}, state,
          {
            msg: action.msg,
            walletLoad: action.status
        })

        case 'WAITING_APROVAL_WEB3':
          return Object.assign({}, state,
           {
             msg: action.msg,
             walletLoad: action.status
            })

      default: return state        
  }

}