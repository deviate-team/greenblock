import { formatDate } from "@/hooks/format";
import { buyOffsetsMockup } from "@/mocks/buy-offsets.test";
import { Link } from "react-router-dom";

const BuyOffSetsPage = () => {
  return (
    <div className="container lg:max-w-screen-xl mx-auto p-4 space-y-6 font-BAI">
      <h1 className="text-2xl font-BAI font-medium text-center">Buy Offset</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {buyOffsetsMockup.map((data) => (
          <Link to={`/buy-offsets/${data._id}`} key={data._id} className="bg-white rounded-xl flex  h-full shadow-lg">
                <img
                  src={data.image}
                  alt=""
                  className="w-1/2 rounded-l-xl object-cover"
                />
            <div className="p-4 w-full space-y-2">
              <h1 className="text-xl font-bold">{data.project_name}</h1>
              <p>By {data.owner}</p>
              <p>{formatDate(data.time_period.start)} - {formatDate(data.time_period.end)}</p>
              <p>${data.price_by_unit}</p>
              <div className="w-full h-3 border border-primary-color rounded-lg">
                <div className="h-full bg-primary-color w-1/2 rounded-lg"></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BuyOffSetsPage;
