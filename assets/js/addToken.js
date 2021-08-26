const tokenAddress = '0xEA1a5ea0807Df64CB73405E92f6A72369131E966'; // This is testnet contract address
const tokenSymbol = 'PAZ';
const tokenDecimals = 9;
const tokenImage = 'https://paz.fuzion.team/assets/img/pazzive-coin-dark.png';

async function addToken(){
const wasAdded = await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20', 
      options: {
        address: tokenAddress,
        symbol: tokenSymbol,
        decimals: tokenDecimals,
        image: tokenImage,
      },
    },
  });
}
