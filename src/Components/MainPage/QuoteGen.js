import React from "react";
// import Quotes from "../../Files/Quotes.js";

import "./QuotesGen.css";

function QuoteGen() {
  // let i = 0;
  // const [currentQuote, setcurrentQuote] = React.useState(Quotes[i]);

  // React.useEffect(
  //   (i) => {
  //     setInterval(() => {
  //       if (i <= Quotes.length - 1) {
  //         setcurrentQuote(Quotes[i]);
  //         i++;
  //       } else {
  //         i = 0;
  //         setcurrentQuote(Quotes[i]);
  //       }
  //     }, 2000);
  //   },
  //   [i]
  // );

  return (
    <div>
      <div className="quotesGen">
        <h1 className="SkillsTools">
          Skills <span id="and">and</span> Tools
        </h1>
      </div>
    </div>
  );
}
export default QuoteGen;
