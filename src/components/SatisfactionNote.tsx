import React from "react";

const MAX_PROGRESS = 250;
const MIN_PROGRESS = 0;
const INCREMENT_VALUE = 50;

const ProgressButton = ({
  symbol,
  callback,
}: {
  symbol: "+" | "-";
  callback: () => void;
}) => (
  <button type="button" onClick={callback} className="p-1 font-bold">
    {symbol}
  </button>
);

const SatistactionNote = () => {
  const [value, setValue] = React.useState<number>(INCREMENT_VALUE);

  const increment = () => {
    setValue((prev) => {
      if (prev >= MAX_PROGRESS) return prev;

      return prev + INCREMENT_VALUE;
    });
  };
  const decrement = () => {
    setValue((prev) => {
      if (prev <= MIN_PROGRESS) return prev;

      return prev - INCREMENT_VALUE;
    });
  };

  return (
    <div className="flex justify-start items-center space-x-2">
      <ProgressButton callback={decrement} symbol="-" />
      <div
        className="inline-block border-green-500 border"
        style={{ width: MAX_PROGRESS }}
      >
        <div
          style={{ width: `${value}px` }}
          className="transition-width duration-200 ease-in bg-green-500 h-3"
        />
      </div>
      <ProgressButton callback={increment} symbol="+" />
    </div>
  );
};

export default SatistactionNote;
