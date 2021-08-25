const tokenAddress = '0x68590a47578E5060a29fd99654f4556dBfa05D10';
const tokenSymbol = 'PAZ';
const tokenDecimals = 9;
const tokenImage = 'https://develop.dx27hd910sf2y.amplifyapp.com/assets/img/pazzive-coin-dark.png';

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
