const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center space-x-2 bg-gray-900 bg-opacity-50">
      <div className="h-4 w-4 animate-pulse rounded-full bg-primary-color"></div>
      <div className="h-4 w-4 animate-pulse rounded-full bg-primary-color"></div>
      <div className="h-4 w-4 animate-pulse rounded-full bg-primary-color"></div>
    </div>
  );
};

export default Loading;