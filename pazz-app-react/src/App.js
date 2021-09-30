import React from "react";
import "./App.css";

import NavBar from "./Components/NavBar";
import YourStatsSection from "./Components/YourStatsSection";
import FeeLessSection from "./Components/FeeLessSection";
import CoinStatsSection from "./Components/CoinsStatsSection";
import Footer from "./Common/Footer";

const App = () => {
  return (
    <div id="prepare">
      <NavBar />
      <YourStatsSection />
      <FeeLessSection />
      <CoinStatsSection />
      <Footer />
    </div>
  );
};

export default App;
