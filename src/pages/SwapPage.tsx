import { useState } from "react";

const SwapPage = () => {
  const [active, setActive] = useState("trade");

  const handleActive = (type: string) => {
    setActive(type);
  };

  return (
    <div className="container lg:max-w-screen-xl p-4 mx-auto">
      <div className="bg-white shadow-md space-y-4 max-w-sm mx-auto p-8 rounded-2xl border-2">
        <div className="space-x-4">
          <button
            onClick={() => handleActive("trade")}
            className={`${
              active === "trade" ? "font-bold text-gray-900" : "text-gray-500"
            } text-lg`}
          >
            Trade
          </button>
          <button
            onClick={() => handleActive("buy")}
            className={`${
              active === "buy" ? "font-bold text-gray-900" : "text-gray-500"
            } text-lg`}
          >
            Buy
          </button>
        </div>
        <div className="flex flex-col space-y-4">
          <input
            type="number"
            className="border-2 p-2 text-3xl py-2 rounded-xl"
          />
          <input
            type="number"
            className="border-2 p-2 text-3xl py-2 rounded-xl"
          />
        </div>
        <div>
          <button className="bg-primary-color text-white w-full text-lg p-3 rounded-xl">
            {active === "trade" ? "Trade" : "Buy"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwapPage;
