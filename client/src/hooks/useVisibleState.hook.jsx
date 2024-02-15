import { useState } from "react";

const useVisibleState = (fullValue, initialValue = 3) => {
  const [visible, setVisible] = useState(initialValue);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + fullValue);
  };

  const showLessItems = () => {
    setVisible(initialValue);
  };

  return { visible, showMoreItems, showLessItems };
};

export default useVisibleState;
