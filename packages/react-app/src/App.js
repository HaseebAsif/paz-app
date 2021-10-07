import { useQuery } from "@apollo/react-hooks";
import React from "react";
import NavBar from "./components/NavBar/index";
import YourStatsSection from "./components/PazStats";
import FeeLessSection from "./components/FeeLessSection/index";
import CoinStatsSection from "./components/CoinsStatsSection/index";
import ConnectedLockYourPazz from "./components/LockPaz/index";
import Footer from "./components/Footer/index";
import { useWeb3Context } from "./contexts/ConnectWeb3";

import GET_TRANSFERS from "./graphql/subgraph";

function App() {
  const { loading, error, data } = useQuery(GET_TRANSFERS);

  React.useEffect(() => {
    if (!loading && !error && data && data.transfers) {
      console.log({ transfers: data.transfers });
    }
  }, [loading, error, data]);

  const { isConnect } = useWeb3Context();

  return (
    <div>
      <div id={isConnect ? "connected" : "prepare"}>
        <NavBar />
        <YourStatsSection />
        {isConnect && <ConnectedLockYourPazz />}
        {!isConnect && <FeeLessSection />}
        <CoinStatsSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
