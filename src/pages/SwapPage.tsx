const SwapPage = () => {
  return (
    <div className="container lg:max-w-screen-xl p-4 mx-auto">
      <div className="bg-white space-y-4 max-w-sm mx-auto p-8 rounded-2xl border-2 border-gray-200">
        <div className="space-x-4">
          <button className="text-gray-900 font-medium text-lg font-BAI">
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
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwapPage;
