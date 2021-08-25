const tokenAddress = '0x68590a47578E5060a29fd99654f4556dBfa05D10'; // This is not the right contract
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
