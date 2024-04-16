import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.scss";
import Loader from "../common/Loader/Loader";

const QuoteCtx = () => {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getQuote() {
    try {
      let res = await axios.get(
        "https://api.quotable.io/quotes/random?limit=30"
      );
      setQuote(res.data);
      setLoading(false);
    } catch (err) {
      alert("refresh and try again");
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    getQuote();
  }, []);

  return (
    <div className="quoteContain">
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </div>
  );
};

export default QuoteCtx;
