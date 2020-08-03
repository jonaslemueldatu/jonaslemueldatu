import React from "react";
import Name from "./Components/MainPage/Name";
import Time from "./Components/MainPage/Time";
import SecondSection from "./Components/MainPage/SecondSection";
import QuoteGen from "./Components/MainPage/QuoteGen";

import "./App.css";

function App() {
  return (
    <div>
      <div className="appContainer">
        <div className="firstSegment">
          <Name></Name>
          <Time></Time>
        </div>
        <div className="space"></div>
        <div className="secondSegment">
          <SecondSection></SecondSection>
        </div>
        <div className="space1"></div>
        <div className="thirdSegment">
          <QuoteGen></QuoteGen>
        </div>
        <div className="space1"></div>
        <div className="fourthSegment"></div>
      </div>
    </div>
  );
}
export default App;
