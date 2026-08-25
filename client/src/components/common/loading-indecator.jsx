import { OrbitProgress } from "react-loading-indicators";

const LoadingIndecator = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/20">
      <OrbitProgress
        dense
        color="#314acc"
        size="medium"
        text=""
        textColor="#3c5478"
      />
    </div>
  );
};

export default LoadingIndecator;
