import Loading from "@/components/Loading";
import { IOffer } from "@/interfaces/offer";
import { offerService } from "@/services/offer.services";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MarketplacePage = () => {
  const [marketplace, setMarketplace] = useState<IOffer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchMarketplaces = async () => {
    try {
      const response = await offerService.getOffers();
      setMarketplace(response);
      setLoading(false);
    } catch (error) {
      const message = (error as Error).message;
      setLoading(false);
      throw new Error(message);
    }
  };

  useEffect(() => {
    fetchMarketplaces();
  }, []);

  if (loading)
    return (
      <Loading />
    );

  return (
    <div className="container lg:max-w-screen-xl p-4 mx-auto font-BAI">
      <h1 className="text-2xl font-BAI font-medium text-center mb-4">
        Marketplace
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {marketplace.map((data) => (
          <Link
            to={`/marketplace/${data._id}`}
            key={data._id}
            className="bg-white rounded-xl flex  h-full shadow-lg"
          >
            <img
              src={data.image_path}
              alt=""
              className="w-1/2 rounded-l-xl object-cover"
            />
            <div className="p-4 w-full space-y-3">
              <h1 className="text-xl font-bold">{data.name}</h1>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#064420"
                    strokeWidth="2"
                    d="M16 16c0-1.105-3.134-2-7-2s-7 .895-7 2s3.134 2 7 2s7-.895 7-2ZM2 16v4.937C2 22.077 5.134 23 9 23s7-.924 7-2.063V16M9 5c-4.418 0-8 .895-8 2s3.582 2 8 2M1 7v5c0 1.013 3.582 2 8 2M23 4c0-1.105-3.1-2-6.923-2c-3.824 0-6.923.895-6.923 2s3.1 2 6.923 2S23 5.105 23 4Zm-7 12c3.824 0 7-.987 7-2V4M9.154 4v10.166M9 9c0 1.013 3.253 2 7.077 2C19.9 11 23 10.013 23 9"
                  />
                </svg>
                <p>
                  <span>Price Per Kg : </span>${data.price_per_kg}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                >
                  <path
                    fill="#059669"
                    d="M24.89 26h7.86c-.66-8.71-4.41-14.12-9.22-17.32l2.19-4.78a1 1 0 0 0-.91-1.4H11.1a1 1 0 0 0-.91 1.4l1.2 2.6h10.12l-.9 2h-1.85A24.9 24.9 0 0 1 20 13.19a24.49 24.49 0 0 1 .32 3l-1.58 1.11a22.54 22.54 0 0 0-.32-3.86A21.74 21.74 0 0 0 17 8.5h-1a28.22 28.22 0 0 0-2.48 3.7a23.91 23.91 0 0 0-1.49 3.46l-1.37-.91a22.78 22.78 0 0 1 1.47-3.34a30.81 30.81 0 0 1 1.92-2.91H12.3l.08.17c-5.3 3.53-9.33 9.73-9.33 20.08a1.65 1.65 0 0 0 1.56 1.75h8a2.67 2.67 0 0 1 1.6-4.5a2.67 2.67 0 0 1-.37-1.34a2.7 2.7 0 0 1 2.7-2.7h6a2.7 2.7 0 0 1 2.7 2.7a2.63 2.63 0 0 1-.35 1.34Z"
                    className="clr-i-solid clr-i-solid-path-1"
                  />
                  <path
                    fill="#059669"
                    d="M21.6 28.5a1 1 0 0 0-1-1h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 1-1Z"
                    className="clr-i-solid clr-i-solid-path-2"
                  />
                  <path
                    fill="#059669"
                    d="M22.54 23.5h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Z"
                    className="clr-i-solid clr-i-solid-path-3"
                  />
                  <path
                    fill="#059669"
                    d="M22 31.5h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Z"
                    className="clr-i-solid clr-i-solid-path-4"
                  />
                  <path
                    fill="#059669"
                    d="M32.7 31.5h-7a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2Z"
                    className="clr-i-solid clr-i-solid-path-5"
                  />
                  <path
                    fill="#059669"
                    d="M33.7 27.5h-7a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2Z"
                    className="clr-i-solid clr-i-solid-path-6"
                  />
                  <path fill="none" d="M0 0h36v36H0z" />
                </svg>
                <p className="">
                  <span>Available : </span>
                  {data.available}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MarketplacePage;
