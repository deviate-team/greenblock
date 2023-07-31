const MarketplacePage = () => {
  const mockupData = [];
  for (let i = 1; i <= 100; i++) {
    mockupData.push({
      id: i,
      token: `Token ${i}`,
      price: `$${Math.floor(Math.random() * 100)}`,
      volume: `${Math.floor(Math.random() * 1000)}`,
      change: `${Math.floor(Math.random() * 20) - 10}%`,
    });
  }

  return (
    <div className="container lg:max-w-screen-xl p-4 mx-auto bg-green-400">
      <table className="bg-red-100 w-full text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Token</th>
            <th>Price</th>
            <th>Volume</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {mockupData.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.token}</td>
              <td>{data.price}</td>
              <td>{data.volume}</td>
              <td>{data.change}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketplacePage;
