import { useState } from "react";

const MarketplacePage = () => {
  const [active, setActive] = useState("trade");

  const handleActive = (type: string) => {
    setActive(type);
  };

  return (
    <div className="container lg:max-w-screen-xl p-4 mx-auto">
      <div className="bg-white space-y-4 max-w-sm mx-auto p-8 rounded-2xl border-2 border-gray-200">
        <div className="space-x-4">
          <button
            onClick={() => handleActive("trade")}
            className={`${
              active === "trade" ? "text-gray-900 font-medium" : "text-gray-500"
            } text-lg font-BAI`}
          >
            Trade
          </button>
          <button
            onClick={() => handleActive("buy")}
            className={`${
              active === "buy" ? "text-gray-900 font-medium" : "text-gray-500"
            } text-lg font-BAI`}
          >
            Buy
          </button>
        </div>
        <div className="flex flex-col space-y-4">
          <input
            type="number"
            className="border-2 border-gray-200 p-2 text-3xl py-2 rounded-xl"
          />
          <input
            type="number"
            className="border-2 border-gray-200 p-2 text-3xl py-2 rounded-xl"
          />
        </div>
        <div>
          <button className="bg-primary-color text-white w-full text-lg p-3 rounded-xl font-BAI font-medium">
            {active === "trade" ? "Trade" : "Buy"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;
