import { useState } from "react";

function usePaginate<T>(items: T[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goTo = (index: number) => {
    if (index < items.length && index > -1){
        setCurrentIndex(index)
    }

  }
  const next = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return {
    current: items[currentIndex],
    currentIndex,
    total: items.length,
    hasNext: currentIndex < items.length - 1,
    hasPrev: currentIndex > 0,
    next,
    prev,
    goTo
  };
}

export default usePaginate;
