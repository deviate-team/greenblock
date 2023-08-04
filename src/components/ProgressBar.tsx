interface ProgressBarProps {
  maximumValue: number;
  currentAmount: number;
}

const ProgressBar = ({ maximumValue, currentAmount }: ProgressBarProps) => {
  const percentage = Math.round((currentAmount / maximumValue) * 100);

  const progressBarStyle: React.CSSProperties = {
    width: `${percentage}%`,
  }

  return (
    <div>
      <div className="w-full h-3 border border-primary-color rounded-lg">
        <div
          className="h-full bg-primary-color rounded-lg"
          style={progressBarStyle}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
