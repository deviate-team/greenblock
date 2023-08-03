export const generateMockData = () => {
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

  return mockupData;
};
