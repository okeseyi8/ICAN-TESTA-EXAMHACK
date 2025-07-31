import { useEffect, useState } from "react";

export const useCountdown = (initialSeconds: number) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  useEffect(() => {
    if (secondsLeft <= 0) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsLeft]);
  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;
  const format = (val: number) => val.toString().padStart(2, "0");

  return {
    hours: hours.toString(),
    minutes: format(minutes),
    seconds: format(seconds),
    time: `${hours}:${format(minutes)}:${format(seconds)}`,
    secondsLeft,
    isDone: secondsLeft <= 0,
  };
};
