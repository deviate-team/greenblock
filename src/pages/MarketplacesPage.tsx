import { useNavigate } from "react-router-dom";
import { generateMockData } from "@/mocks/marketplace.test";

const MarketplacesPage = () => {
  const mockupData = generateMockData();

  const navigate = useNavigate();

  const handleRowClick = (id: number) => {
    navigate(`/marketplace/${id}`);
  };

  return (
    <div className="container lg:max-w-screen-xl p-4 mx-auto font-IBM">
      <table className="w-full text-center border-collapse border-2 border-gray-300">
        <thead className="">
          <tr className="border-2 border-gray-300">
            <th className="py-4 ">#</th>
            <th className="py-4 ">Token</th>
            <th className="py-4 ">Price</th>
            <th className="py-4 ">Volume</th>
            <th className="py-4 ">Change</th>
          </tr>
        </thead>
        <tbody>
          {mockupData.map((data) => (
            <tr
              key={data.id}
              className="hover:bg-gray-200"
              onClick={() => handleRowClick(data.id)}
            >
              <td className="py-4 cursor-pointer">{data.id}</td>
              <td className="py-4 cursor-pointer">{data.token}</td>
              <td className="py-4 cursor-pointer">{data.price}</td>
              <td className="py-4 cursor-pointer">{data.volume}</td>
              <td className="py-4 cursor-pointer">{data.change}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketplacesPage;
