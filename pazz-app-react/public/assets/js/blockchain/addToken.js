const tokenAddress = "0xEA1a5ea0807Df64CB73405E92f6A72369131E966"; // THIS IS THE TESTNET CONTRACT ADDRESS
const tokenSymbol = "PAZ";
const tokenDecimals = 9;
const tokenImage =
  "https://develop.dx27hd910sf2y.amplifyapp.com/assets/img/pazzive-coin-dark.png";

async function addToken() {
  if (
    typeof window.ethereum !== "undefined" ||
    typeof window.web3 !== "undefined"
  ) {
    const network = window.ethereum.chainId;
    const chainId = parseInt(network, 16);
    if (chainId != 56) {
      try {
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x38" }],
        });
      } catch (error) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (error.code === 4902) {
          try {
            await ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: "0x38",
                  chainName: "Binance Smart Chain",
                  nativeCurrency: {
                    name: "BNB",
                    symbol: "BNB",
                    decimals: 18,
                  },
                  rpcUrls: ["https://bsc-dataseed.binance.org/"],
                  blockExplorerUrls: ["https://bscscan.com/"],
                },
              ],
            });
          } catch (addError) {
            // handle "add" error
          }
        }
      }
    } else {
      await ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals: tokenDecimals,
            image: tokenImage,
          },
        },
      });
    }
  } else {
    window.open("https://metamask.io/", "_blank");
  }
}
