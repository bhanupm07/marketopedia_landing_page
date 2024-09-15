import React from "react";
import alert from "../assets/alerts.png";
import overview from "../assets/overview.png";
import analysis from "../assets/analysis.png";

const About = () => {
  return (
    <main className="text-center mt-28">
      <h2 className="text-3xl">Are you ready?</h2>
      <p className="mt-10 mb-20 px-40">
        At Marketopedia.ai, we empower traders and investors with real-time
        stock and cryptocurrency insights. Our platform provides timely alerts,
        market data, and expert analysis to help users make informed decisions.
        Whether you're tracking stocks or crypto trends, setting custom alerts,
        or diving deep into technical analysis, Marketopedia.ai delivers the
        tools you need to stay ahead of the market. Join us to simplify your
        trading journey and enhance your investment strategies with confidence.
      </p>

      <div>
        <div className="flex">
          <div className="border-blue-400 border">
            <img src={alert} alt="" className="w-10" />
          </div>
          <p>
            Stock price alerts (set custom alerts based on price thresholds,
            volume changes, moving averages, etc.), Crypto price alerts
            (real-time alerts for major cryptocurrencies), Notifications through
            email, SMS, and app notifications for instant updates.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
