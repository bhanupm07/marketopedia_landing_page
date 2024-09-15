import React from "react";
import alert from "../assets/alerts.png";
import overview from "../assets/overview.png";
import analysis from "../assets/analysis.png";
import news from "../assets/news.png";

const About = () => {
  return (
    <main className="text-center mt-20">
      <h2 className="text-5xl">Are you ready?</h2>
      <p className="mt-10 mb-20 px-40 text-xl">
        At Marketopedia.ai, we empower traders and investors with real-time
        stock and cryptocurrency insights. Our platform provides timely alerts,
        market data, and expert analysis to help users make informed decisions.
        Whether you're tracking stocks or crypto trends, setting custom alerts,
        or diving deep into technical analysis, Marketopedia.ai delivers the
        tools you need to stay ahead of the market. Join us to simplify your
        trading journey and enhance your investment strategies with confidence.
      </p>

      <h2 className="text-4xl mb-10">Features:</h2>

      <div className="flex gap-10 px-20 mb-20">
        <div className="flex items-center gap-8 w-1/2">
          <div className="border-blue-400">
            <img src={alert} alt="" className="w-20" />
          </div>
          <ul className="text-left list-disc">
            <li>
              Stock price alerts (set custom alerts based on price thresholds,
              volume changes, moving averages, etc.)
            </li>
            <li>
              Crypto price alerts (real-time alerts for major cryptocurrencies)
            </li>
            <li>
              Notifications through email, SMS, and app notifications for
              instant updates.
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-8 w-1/2">
          <div className="border-blue-400">
            <img src={analysis} alt="" className="w-30" />
          </div>
          <ul className="text-left list-disc">
            <li>
              Technical indicators (RSI, MACD, moving averages, Bollinger Bands,
              etc.)
            </li>
            <li>
              Price charts (candlestick, line, and bar charts) Historical data
              analysis (past performance over time for both stocks and cryptos)
            </li>
            <li>Glossary of stock market and cryptocurrency terms</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-10 px-20">
        <div className="flex items-center gap-8 w-1/2">
          <div className="border-blue-400">
            <img src={overview} alt="" className="w-20" />
          </div>
          <ul className="text-left list-disc">
            <li>
              Summary of key market indices (S&P 500, NASDAQ, Dow Jones, etc.)
            </li>
            <li>
              Trending stocks (highest movers, most traded, largest
              gainers/losers)
            </li>
            <li>
              Cryptocurrency dashboard (top-performing cryptos, volume changes,
              24-hour trends)
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-8 w-1/2">
          <div className="border-blue-400">
            <img src={news} alt="" className="w-20" />
          </div>
          <ul className="text-left list-disc">
            <li>Aggregated news feeds related to stocks and crypto markets</li>
            <li>Expert commentary and articles on market movements</li>
            <li>Daily/weekly market summaries</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default About;
