//SAGA ROOT
const sagaWeb3Load = () => ({
  type: "SAGA_LOAD_WEB3"
});

// ACTION GENERATORS

const fetchWeb3 = (address, network, balance) => ({
  type: "WEB3_LOAD",
  address,
  network,
  balance,
  status:true
});

const waitingAprovalWeb3 = () => ({
  type: "WAITING_APROVAL_WEB3",
  msg: 'Please check your wallet and connect to the dApp',
  status:false
});

const invalidWeb3 = (err) => ({
  type: "INVALID_WEB3_LOAD",
  msg: err,
  status:false
});

const noWeb3 = () => ({
  type: "NO_WEB3",
  msg: 'No Ethereum Wallet or Provider detected, please download Metamask for Web or Cipher Browser for Mobile',
  status:false
});

const denyWeb3 = () => ({
  type: "DENY_WEB3",
  msg: 'Permission deny by the user, refresh the page to try again',
  status:false
});


// EXPORT ACTIONS

export { fetchWeb3, invalidWeb3, noWeb3, denyWeb3, waitingAprovalWeb3, sagaWeb3Load };