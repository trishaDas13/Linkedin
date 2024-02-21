import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.scss";

const QuoteCtx = () => {
  const [quote, setQuote] = useState([]);

  async function getQuote() {
    try {
      let res = await axios.get(
        "https://api.quotable.io/quotes/random?limit=30"
      );
      setQuote(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="quoteContain">
      <div className="quote_block">
        {quote.map((item) => {
          return (
            <div
              className="hold_quote"
              key={item._id}
              title="Click to copy the Quote"
              onClick={() => {
                navigator.clipboard.writeText(`${item.content}`);
              }}
            >
              <p className="quote">{item.content}</p>
              <p className="author">-{item.author}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuoteCtx;
